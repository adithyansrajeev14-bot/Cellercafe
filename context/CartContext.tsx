'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/menuData';

export interface CartItemCustomization {
  milk?: string;
  sweetness?: string;
  notes?: string;
  selectedExtras?: string[];
}

export interface CartItem {
  cartItemId: string; // unique ID incorporating customization
  menuItem: MenuItem;
  quantity: number;
  customization?: CartItemCustomization;
  unitPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, customization?: CartItemCustomization, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  appliedPromo: { code: string; discountPercent: number } | null;
  applyPromo: (code: string) => { success: boolean; message: string };
  removePromo: () => void;
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  total: number;
  totalCount: number;
  lastAddedItem: MenuItem | null;
  showAddedNotification: boolean;
  dismissNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load cart lazily from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('celler_cafe_cart');
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (e) {
        console.error('Failed to load cart from localStorage', e);
        return [];
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number } | null>(null);
  const [lastAddedItem, setLastAddedItem] = useState<MenuItem | null>(null);
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('celler_cafe_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (item: MenuItem, customization?: CartItemCustomization, quantity = 1) => {
    // Generate cartItemId based on item id and customization string
    const custKey = customization
      ? `${customization.milk || ''}-${customization.sweetness || ''}-${(customization.selectedExtras || []).sort().join(',')}`
      : 'standard';
    const cartItemId = `${item.id}-${custKey}`;

    // Calculate unit price with extras
    let extraPrice = 0;
    if (customization?.selectedExtras && item.customizations?.extras) {
      customization.selectedExtras.forEach((extraName) => {
        const found = item.customizations?.extras?.find((e) => e.name === extraName);
        if (found) extraPrice += found.price;
      });
    }
    const unitPrice = item.price + extraPrice;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { cartItemId, menuItem: item, quantity, customization, unitPrice }];
      }
    });

    setLastAddedItem(item);
    setShowAddedNotification(true);
    setTimeout(() => {
      setShowAddedNotification(false);
    }, 3500);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
  };

  const applyPromo = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'CELLER10') {
      setAppliedPromo({ code: 'CELLER10', discountPercent: 10 });
      return { success: true, message: '10% discount applied!' };
    } else if (cleanCode === 'WELCOME15') {
      setAppliedPromo({ code: 'WELCOME15', discountPercent: 15 });
      return { success: true, message: '15% welcome discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try CELLER10' };
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const discountAmount = appliedPromo ? Math.round((subtotal * appliedPromo.discountPercent) / 100) : 0;
  const taxableSubtotal = Math.max(0, subtotal - discountAmount);
  const taxAmount = Math.round(taxableSubtotal * 0.05); // 5% GST
  const total = taxableSubtotal + taxAmount;
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        appliedPromo,
        applyPromo,
        removePromo,
        subtotal,
        discountAmount,
        taxAmount,
        total,
        totalCount,
        lastAddedItem,
        showAddedNotification,
        dismissNotification: () => setShowAddedNotification(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
