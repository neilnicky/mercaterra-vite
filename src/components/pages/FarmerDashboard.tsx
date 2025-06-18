import React from 'react';
import { TrendingUp, Package, ShoppingCart, DollarSign, Plus, Eye, Edit } from 'lucide-react';
import { mockProducts } from '../../data/mockData';

interface FarmerDashboardProps {
  onNavigate: (page: string) => void;
}

const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ onNavigate }) => {
  const stats = [
    {
      title: 'Total Products',
      value: '12',
      change: '+2 this week',
      icon: <Package className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Active Orders',
      value: '8',
      change: '+3 today',
      icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Monthly Revenue',
      value: '$2,847',
      change: '+12% from last month',
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Profile Views',
      value: '156',
      change: '+8% this week',
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const recentOrders = [
    { id: '1', customer: 'Sarah Johnson', items: 'Tomatoes, Spinach', total: '$24.50', status: 'pending' },
    { id: '2', customer: 'Mike Chen', items: 'Corn, Eggs', total: '$18.75', status: 'confirmed' },
    { id: '3', customer: 'Emma Wilson', items: 'Mixed Vegetables', total: '$31.25', status: 'shipped' },
    { id: '4', customer: 'David Lee', items: 'Organic Spinach', total: '$9.00', status: 'delivered' }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farmer Dashboard</h1>
          <p className="text-gray-600">Welcome back, John! Here's how your farm is performing.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-white p-6 rounded-xl border ${stat.color} hover:shadow-md transition-shadow`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  {stat.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('product-management')}
                  className="w-full flex items-center justify-between p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center">
                    <Plus className="w-5 h-5 mr-3" />
                    <span className="font-medium">Add New Product</span>
                  </div>
                </button>
                <button
                  onClick={() => onNavigate('orders')}
                  className="w-full flex items-center justify-between p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-3" />
                    <span className="font-medium">View All Orders</span>
                  </div>
                </button>
                <button
                  onClick={() => onNavigate('profile')}
                  className="w-full flex items-center justify-between p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center">
                    <Edit className="w-5 h-5 mr-3" />
                    <span className="font-medium">Edit Profile</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Products</h2>
              <div className="space-y-4">
                {mockProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex items-center space-x-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.reviewCount} orders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                <button
                  onClick={() => onNavigate('orders')}
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left font-medium text-gray-500 pb-3">Order ID</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Customer</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Items</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Total</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-50">
                        <td className="py-4 font-medium text-gray-900">#{order.id}</td>
                        <td className="py-4 text-gray-600">{order.customer}</td>
                        <td className="py-4 text-gray-600">{order.items}</td>
                        <td className="py-4 font-semibold text-gray-900">{order.total}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;