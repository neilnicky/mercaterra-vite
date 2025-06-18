import React from 'react';
import { ShoppingBag, Heart, Star, Clock, MapPin, Truck } from 'lucide-react';
import { mockProducts } from '../../data/mockData';
import ProductCard from '../common/ProductCard';

interface BuyerDashboardProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: any) => void;
}

const BuyerDashboard: React.FC<BuyerDashboardProps> = ({ onNavigate, onAddToCart }) => {
  const stats = [
    {
      title: 'Total Orders',
      value: '24',
      icon: <ShoppingBag className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Saved Products',
      value: '8',
      icon: <Heart className="w-6 h-6 text-red-600" />,
      color: 'bg-red-50'
    },
    {
      title: 'Avg Rating Given',
      value: '4.8',
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      color: 'bg-yellow-50'
    }
  ];

  const recentOrders = [
    {
      id: '1',
      items: ['Organic Tomatoes', 'Fresh Spinach'],
      total: '$18.50',
      status: 'delivered',
      date: '2024-01-20',
      farmer: 'Green Valley Farm'
    },
    {
      id: '2',
      items: ['Sweet Corn', 'Farm Eggs'],
      total: '$12.74',
      status: 'shipped',
      date: '2024-01-22',
      farmer: 'Sunny Acres Farm'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
          <p className="text-gray-600">Discover fresh produce from local farmers in your area.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} p-6 rounded-xl border border-gray-100`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => onNavigate('market')}
                  className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Browse Market
                </button>
                <button
                  onClick={() => onNavigate('orders')}
                  className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  View Orders
                </button>
                <button
                  onClick={() => onNavigate('cart')}
                  className="flex items-center justify-center p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Truck className="w-5 h-5 mr-2" />
                  Checkout Cart
                </button>
              </div>
            </div>

            {/* Fresh Picks */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Fresh Picks for You</h2>
                <button
                  onClick={() => onNavigate('market')}
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockProducts.slice(0, 2).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    variant="compact"
                  />
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">Order #{order.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900">{order.total}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{order.farmer}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(order.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {order.items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('orders')}
                className="w-full mt-4 py-2 text-green-600 hover:text-green-700 font-medium text-sm border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
              >
                View All Orders
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Today's Weather</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">72°F</p>
                  <p className="text-blue-100">Sunny</p>
                </div>
                <div className="text-4xl">☀️</div>
              </div>
              <p className="text-sm text-blue-100 mt-3">Perfect weather for fresh deliveries!</p>
            </div>

            {/* Favorite Farmers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Favorite Farmers</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">GV</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Green Valley Farm</p>
                    <p className="text-xs text-gray-500">Organic vegetables</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold text-sm">SA</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Sunny Acres Farm</p>
                    <p className="text-xs text-gray-500">Fresh corn & grains</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Tips */}
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Seasonal Tip</h3>
              <p className="text-sm text-green-800">
                January is perfect for citrus fruits and winter vegetables like kale and Brussels sprouts. 
                Look for these nutrient-rich options in the market!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;