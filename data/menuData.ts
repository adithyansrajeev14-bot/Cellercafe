export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Cold Beverages' | 'Tea' | 'Snacks' | 'Desserts' | 'Signature Specials';
  description: string;
  price: number; // in INR ₹
  image: string;
  isVeg: boolean;
  isPopular?: boolean;
  isSignature?: boolean;
  calories?: number;
  tags?: string[];
  customizations?: {
    milk?: string[];
    sweetness?: string[];
    extras?: { name: string; price: number }[];
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Coffee' | 'Interior' | 'Desserts' | 'Atmosphere';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export const MENU_CATEGORIES = [
  'All',
  'Signature Specials',
  'Coffee',
  'Cold Beverages',
  'Tea',
  'Snacks',
  'Desserts',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Signature Specials
  {
    id: 'sig-1',
    name: 'Celler Signature Gold Latte',
    category: 'Signature Specials',
    description: 'Single-origin espresso, artisan Madagascar vanilla bean, velvety oat milk, finished with edible 24K gold flakes.',
    price: 340,
    image: '/images/celler_signature_coffee_1786539085334.jpg',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    calories: 220,
    tags: ['Best Seller', 'House Special'],
    customizations: {
      milk: ['Oat Milk (Default)', 'Almond Milk', 'Whole Milk', 'Soy Milk'],
      sweetness: ['Standard (100%)', 'Less Sweet (50%)', 'No Sugar'],
      extras: [
        { name: 'Extra Espresso Shot', price: 60 },
        { name: 'Whipped Cream', price: 40 },
      ],
    },
  },
  {
    id: 'sig-2',
    name: '18-Hour Nitro Cold Brew',
    category: 'Signature Specials',
    description: 'Slow-steeped dark roast over a hand-carved crystal ice sphere, infused with nitrogen for a velvety cream texture.',
    price: 310,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    calories: 15,
    tags: ['Zero Sugar', 'Smooth Nitrogen'],
  },
  {
    id: 'sig-3',
    name: 'Celler Gold Golden Frappe',
    category: 'Signature Specials',
    description: 'Blended double espresso, roasted hazelnut praline, vanilla bean gelato, topped with golden honeycomb crumble.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isSignature: true,
    calories: 380,
    tags: ['Decadent', 'Frappe'],
  },
  {
    id: 'sig-4',
    name: 'Smoked Caramel Velvet Mocha',
    category: 'Signature Specials',
    description: 'Single-origin 70% dark Belgian chocolate, smoked maple caramel, espresso & steamed micro-foamed milk.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isSignature: true,
    calories: 310,
    tags: ['Rich Chocolate', 'Winter Warmth'],
  },

  // Coffee
  {
    id: 'cof-1',
    name: 'Artisan Espresso',
    category: 'Coffee',
    description: 'Double shot brewed from 100% single-origin Arabica beans with rich crema.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 10,
    tags: ['Classic', 'Strong'],
  },
  {
    id: 'cof-2',
    name: 'Classic Cappuccino',
    category: 'Coffee',
    description: 'Balanced espresso with equal parts rich steamed milk and dense silky foam.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isPopular: true,
    calories: 140,
    tags: ['Crowd Favorite'],
  },
  {
    id: 'cof-3',
    name: 'Cafe Latte',
    category: 'Coffee',
    description: 'Smooth espresso layered with a generous pour of steamed milk and delicate foam art.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 180,
  },
  {
    id: 'cof-4',
    name: 'Belgian Dark Mocha',
    category: 'Coffee',
    description: 'Rich espresso folded with melted dark cocoa, topped with dusted cocoa powder.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 290,
  },
  {
    id: 'cof-5',
    name: 'Caffe Americano',
    category: 'Coffee',
    description: 'Bold double shot espresso poured over hot filtered spring water.',
    price: 210,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 15,
  },
  {
    id: 'cof-6',
    name: 'Salted Caramel Macchiato',
    category: 'Coffee',
    description: 'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and salted caramel drizzle.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isPopular: true,
    calories: 260,
  },

  // Cold Beverages
  {
    id: 'cld-1',
    name: 'Iced Vanilla Caramel Latte',
    category: 'Cold Beverages',
    description: 'Chilled espresso over clear ice cubes, creamy cold milk, and organic bourbon vanilla caramel.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isPopular: true,
    calories: 210,
  },
  {
    id: 'cld-2',
    name: 'Passionfruit & Mint Sparkler',
    category: 'Cold Beverages',
    description: 'Sparkling tonic, hand-crushed Egyptian mint leaves, passionfruit reduction, and lime juice.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 110,
    tags: ['Refreshing', 'Citrus'],
  },
  {
    id: 'cld-3',
    name: 'Iced Uji Ceremonial Matcha',
    category: 'Cold Beverages',
    description: 'First-harvest Japanese green tea whisked with agave nectar and creamy chilled oat milk.',
    price: 310,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 160,
    tags: ['Superfood', 'Antioxidants'],
  },
  {
    id: 'cld-4',
    name: 'Wild Berry Cold Brew Tonic',
    category: 'Cold Beverages',
    description: 'Signature cold brew layered over artisan berry elixir and botanical tonic water.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 85,
  },

  // Tea
  {
    id: 'tea-1',
    name: 'Earl Grey French Lavender',
    category: 'Tea',
    description: 'Fragrant bergamot black tea infused with organic dried French lavender flowers.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 5,
  },
  {
    id: 'tea-2',
    name: 'Spiced Himalayan Chai Latte',
    category: 'Tea',
    description: 'Single-estate Assam black tea slow-simmered with cardamom, cinnamon, cloves, ginger, and hot milk.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isPopular: true,
    calories: 180,
    tags: ['Aromatic Spices'],
  },
  {
    id: 'tea-3',
    name: 'Chamomile Citrus Blossom',
    category: 'Tea',
    description: 'Caffeine-free soothing Egyptian chamomile heads with lemongrass and sun-dried orange zest.',
    price: 210,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 0,
    tags: ['Calming', 'Caffeine Free'],
  },

  // Snacks
  {
    id: 'snk-1',
    name: 'Truffle Mushroom Sourdough Toast',
    category: 'Snacks',
    description: 'Sauteed wild cremini mushrooms, black truffle butter, whipped ricotta, and herbs on toasted rustic sourdough.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isPopular: true,
    calories: 340,
    tags: ['Artisan Bread', 'Chef Special'],
  },
  {
    id: 'snk-2',
    name: 'Avocado & Whipped Feta Toast',
    category: 'Snacks',
    description: 'Hass avocado mash, whipped Greek feta, chili crisp, toasted pumpkin seeds & microgreens on sourdough.',
    price: 390,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 380,
    tags: ['Healthy', 'Nutritious'],
  },
  {
    id: 'snk-3',
    name: 'Smoked Salmon & Capers Bagel',
    category: 'Snacks',
    description: 'Artisanal sesame bagel, dill cream cheese, wild Norwegian smoked salmon, capers, red onion & lemon squeeze.',
    price: 480,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    calories: 420,
    tags: ['Gourmet Seafood'],
  },
  {
    id: 'snk-4',
    name: 'Club Butter Croissant Sandwich',
    category: 'Snacks',
    description: 'Flaky golden butter croissant loaded with herb smoked chicken breast, aged cheddar, sun-dried tomato pesto & arugula.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    isPopular: true,
    calories: 490,
  },
  {
    id: 'snk-5',
    name: 'Garlic Herb Rosemary Focaccia',
    category: 'Snacks',
    description: 'House-baked olive oil focaccia served warm with whipped garlic herb butter and aged balsamic dip.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 310,
  },

  // Desserts
  {
    id: 'des-1',
    name: 'Celler Signature Tiramisu',
    category: 'Desserts',
    description: 'Traditional Italian recipe with espresso-soaked ladyfingers, velvety mascarpone cream & rich Dutch cocoa powder.',
    price: 340,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    isPopular: true,
    calories: 420,
    tags: ['House Classic', 'Italian'],
  },
  {
    id: 'des-2',
    name: 'Molten Chocolate Lava Cake',
    category: 'Desserts',
    description: 'Warm dark chocolate sponge cake with a flowing molten center, served with Madagascar vanilla gelato.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 460,
  },
  {
    id: 'des-3',
    name: 'Classic New York Cheesecake',
    category: 'Desserts',
    description: 'Ultra-creamy baked cheesecake on a graham cracker crust with artisan wild blueberry reduction.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 440,
  },
  {
    id: 'des-4',
    name: 'Belgian Fudge Walnut Brownie',
    category: 'Desserts',
    description: 'Dense dark chocolate fudge brownie loaded with toasted walnuts, served warm.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    calories: 390,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Warm Twilight Ambiance',
    category: 'Atmosphere',
    image: '/images/celler_hero_bg_1786539072525.jpg',
    description: 'Our main seating floor illuminated by hand-blown glass pendant lights.',
  },
  {
    id: 'gal-2',
    title: '24K Gold Signature Latte',
    category: 'Coffee',
    image: '/images/celler_signature_coffee_1786539085334.jpg',
    description: 'Crafted with passion using single-origin Arabica beans.',
  },
  {
    id: 'gal-3',
    title: 'Cozy Corner Sanctuary',
    category: 'Interior',
    image: '/images/celler_ambiance_1786539099259.jpg',
    description: 'Soft leather seating designed for quiet conversations and reflection.',
  },
  {
    id: 'gal-4',
    title: 'Artisan Espresso Extraction',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    description: 'Precision brewing at 9 bar pressure for optimum floral and cocoa notes.',
  },
  {
    id: 'gal-5',
    title: 'Signature Tiramisu & Mocha',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
    description: 'Daily fresh pastries baked in-house by our pastry chefs.',
  },
  {
    id: 'gal-6',
    title: 'Morning Sunshine At Celler',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    description: 'Sun-dappled window tables perfect for a relaxed breakfast.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aarav Sharma',
    role: 'Architect & Coffee Enthusiast',
    rating: 5,
    comment: 'Celler Cafe is an absolute gem. The Gold Latte is unmatched in richness, and the interior design provides the perfect calming atmosphere for work or meetings.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    date: '2 days ago',
  },
  {
    id: 't-2',
    name: 'Sophia Chen',
    role: 'Food Blogger',
    rating: 5,
    comment: 'The Truffle Mushroom Toast paired with their 18-hour Cold Brew was pure bliss. Easily the best cafe experience in town with attention to every single detail.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    date: '1 week ago',
  },
  {
    id: 't-3',
    name: 'Rohan Nair',
    role: 'Creative Director',
    rating: 5,
    comment: 'Subtle lighting, fantastic jazz playlist, and world-class coffee. The Tiramisu melts in your mouth! Celler Cafe is my go-to weekend ritual.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    date: '2 weeks ago',
  },
];
