import React, { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Eye, MessageSquare } from 'lucide-react';
import { Order } from '../../types';

interface OrdersPageProps {
  userRole: 'farmer' | 'buyer';
}

const OrdersPage: React.FC<OrdersPageProps> = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('all');

  const mockOrders: Order[] = [
    {
      id: '1',
      buyerId: '2',
      farmerId: '1',
      products: [
        {
          product: {
            id: '1',
            name: 'Organic Heirloom Tomatoes',
            description: 'Fresh, vine-ripened heirloom tomatoes',
            price: 6.99,
            unit: 'lb',
            category: 'Vegetables',
            farmerId: '1',
            farmerName: 'Green Valley Farm',
            images: ['https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=srgb&dpr=1&w=500'],
            inStock: true,
            quantity: 150,
            harvestDate: '2024-01-15',
            location: 'California, USA',
            organic: true,
            rating: 4.8,
            reviewCount: 32
          },
          quantity: 2
        }
      ],
      total: 13.98,
      status: 'delivered',
      orderDate: '2024-01-20',
      deliveryDate: '2024-01-22',
      shippingAddress: '123 Main St, New York, NY 10001'
    },
    {
      id: '2',
      buyerId: '2',
      farmerId: '1',
      products: [
        {
          product: {
            id: '2',
            name: 'Fresh Spinach Leaves',
            description: 'Crisp, nutritious spinach leaves',
            price: 4.50,
            unit: 'bunch',
            category: 'Leafy Greens',
            farmerId: '1',
            farmerName: 'Green Valley Farm',
            images: ['https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=srgb&dpr=1&w=500'],
            inStock: true,
            quantity: 80,
            harvestDate: '2024-01-20',
            location: 'California, USA',
            organic: true,
            rating: 4.6,
            reviewCount: 18
          },
          quantity: 3
        }
      ],
      total: 13.50,
      status: 'shipped',
      orderDate: '2024-01-22',
      shippingAddress: '123 Main St, New York, NY 10001'
    },
    {
      id: '3',
      buyerId: '2',
      farmerId: '1',
      products: [
        {
          product: {
            id: '3',
            name: 'Sweet Corn',
            description: 'Sweet, tender corn on the cob',
            price: 0.75,
            unit: 'ear',
            category: 'Vegetables',
            farmerId: '1',
            farmerName: 'Sunny Acres Farm',
            images: ['https://images.pexels.com/photos/1266002/pexels-photo-1266002.jpeg?auto=compress&cs=srgb&dpr=1&w=500'],
            inStock: true,
            quantity: 200,
            harvestDate: '2024-01-18',
            location: 'Iowa, USA',
            organic: false,
            rating: 4.9,
            reviewCount: 45
          },
          quantity: 6
        }
      ],
      total: 4.50,
      status: 'pending',
      orderDate: '2024-01-23',
      shippingAddress: '123 Main St, New York, NY 10001'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'confirmed': return <Package className="w-5 h-5 text-blue-600" />;
      case 'shipped': return <Package className="w-5 h-5 text-purple-600" />;
      case 'delivered': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'cancelled': return <XCircle className="w-5 h-5 text-red-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = mockOrders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });

  const tabs = [
    { id: 'all', label: 'All Orders', count: mockOrders.length },
    { id: 'pending', label: 'Pending', count: mockOrders.filter(o => o.status === 'pending').length },
    { id: 'shipped', label: 'Shipped', count: mockOrders.filter(o => o.status === 'shipped').length },
    { id: 'delivered', label: 'Delivered', count: mockOrders.filter(o => o.status === 'delivered').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {userRole === 'farmer' ? 'Customer Orders' : 'My Orders'}
          </h1>
          <p className="text-gray-600">
            {userRole === 'farmer' 
              ? 'Manage and track orders from your customers' 
              : 'Track your orders and delivery status'
            }
          </p>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">{mockOrders.length}</span>
            </div>
            <p className="text-sm font-medium text-gray-600">Total Orders</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">
                {mockOrders.filter(o => o.status === 'pending').length}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">Pending</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">
                {mockOrders.filter(o => o.status === 'delivered').length}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">Delivered</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-600 text-xl">$</span>
              <span className="text-2xl font-bold text-gray-900">
                ${mockOrders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">Total Value</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="border-b border-gray-100">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 bg-gray-100 text-gray-600 py-1 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Orders List */}
          <div className="p-6">
            {filteredOrders.length > 0 ? (
              <div className="space-y-4">
                {filteredOrders.map((order) => (
                  <div key={order.id} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">{new Date(order.orderDate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Items Ordered</h4>
                        <div className="space-y-2">
                          {order.products.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 text-sm">{item.product.name}</p>
                                <p className="text-xs text-gray-500">
                                  {item.quantity} x ${item.product.price} per {item.product.unit}
                                </p>
                              </div>
                              <p className="font-semibold text-gray-900 text-sm">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          {userRole === 'farmer' ? 'Customer Details' : 'Delivery Information'}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-600">
                            <span className="font-medium">Address:</span> {order.shippingAddress}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Order Date:</span> {new Date(order.orderDate).toLocaleDateString()}
                          </p>
                          {order.deliveryDate && (
                            <p className="text-gray-600">
                              <span className="font-medium">Delivered:</span> {new Date(order.deliveryDate).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        {getStatusIcon(order.status)}
                        <span>
                          {order.status === 'pending' && 'Waiting for confirmation'}
                          {order.status === 'confirmed' && 'Order confirmed, preparing for shipment'}
                          {order.status === 'shipped' && 'Order is on the way'}
                          {order.status === 'delivered' && 'Order delivered successfully'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </button>
                        <button className="flex items-center px-4 py-2 text-green-600 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact {userRole === 'farmer' ? 'Customer' : 'Farmer'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-600">
                  {activeTab === 'all' 
                    ? `You don't have any orders yet.`
                    : `No ${activeTab} orders at the moment.`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;