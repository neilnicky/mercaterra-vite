import { User, Product } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'farmer',
    location: 'California, USA',
    phone: '+1 (555) 123-4567',
    joinDate: '2023-03-15',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=srgb&dpr=1&w=200'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'buyer',
    location: 'New York, USA',
    phone: '+1 (555) 987-6543',
    joinDate: '2023-05-22',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=srgb&dpr=1&w=200'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Heirloom Tomatoes',
    description: 'Fresh, vine-ripened heirloom tomatoes grown with organic practices. Perfect for salads, cooking, or fresh eating.',
    price: 6.99,
    unit: 'lb',
    category: 'Vegetables',
    farmerId: '1',
    farmerName: 'Green Valley Farm',
    images: [
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=srgb&dpr=1&w=500',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=srgb&dpr=1&w=500'
    ],
    inStock: true,
    quantity: 150,
    harvestDate: '2024-01-15',
    location: 'California, USA',
    organic: true,
    rating: 4.8,
    reviewCount: 32
  },
  {
    id: '2',
    name: 'Fresh Spinach Leaves',
    description: 'Crisp, nutritious spinach leaves perfect for salads, smoothies, or cooking. Harvested this morning.',
    price: 4.50,
    unit: 'bunch',
    category: 'Leafy Greens',
    farmerId: '1',
    farmerName: 'Green Valley Farm',
    images: [
      'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=srgb&dpr=1&w=500'
    ],
    inStock: true,
    quantity: 80,
    harvestDate: '2024-01-20',
    location: 'California, USA',
    organic: true,
    rating: 4.6,
    reviewCount: 18
  },
  {
    id: '3',
    name: 'Sweet Corn',
    description: 'Sweet, tender corn on the cob. Perfect for grilling or boiling. Non-GMO and pesticide-free.',
    price: 0.75,
    unit: 'ear',
    category: 'Vegetables',
    farmerId: '1',
    farmerName: 'Sunny Acres Farm',
    images: [
      'https://images.pexels.com/photos/1266002/pexels-photo-1266002.jpeg?auto=compress&cs=srgb&dpr=1&w=500'
    ],
    inStock: true,
    quantity: 200,
    harvestDate: '2024-01-18',
    location: 'Iowa, USA',
    organic: false,
    rating: 4.9,
    reviewCount: 45
  },
  {
    id: '4',
    name: 'Farm Fresh Eggs',
    description: 'Free-range chicken eggs from happy hens. Rich, golden yolks and superior taste.',
    price: 5.99,
    unit: 'dozen',
    category: 'Dairy & Eggs',
    farmerId: '1',
    farmerName: 'Happy Hen Farm',
    images: [
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=srgb&dpr=1&w=500'
    ],
    inStock: true,
    quantity: 120,
    harvestDate: '2024-01-21',
    location: 'Vermont, USA',
    organic: true,
    rating: 4.7,
    reviewCount: 28
  }
];