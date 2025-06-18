export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'buyer';
  avatar?: string;
  location?: string;
  phone?: string;
  joinDate: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string; // kg, lb, piece, etc.
  category: string;
  farmerId: string;
  farmerName: string;
  images: string[];
  inStock: boolean;
  quantity: number;
  harvestDate: string;
  location: string;
  organic: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  buyerId: string;
  farmerId: string;
  products: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
  shippingAddress: string;
}

export type AppState = {
  currentUser: User | null;
  currentPage: string;
  cart: CartItem[];
  selectedProduct?: Product;
};