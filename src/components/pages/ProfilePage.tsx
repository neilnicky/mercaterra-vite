import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Calendar, Edit3, Save, X, Camera, Star, Package, ShoppingBag } from 'lucide-react';
import { User as UserType } from '../../types';

interface ProfilePageProps {
  user: UserType | null;
  onUpdateProfile: (updatedUser: UserType) => void;
  onNavigate: (page: string) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUpdateProfile, onNavigate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    avatar: user?.avatar || ''
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please sign in to view your profile</p>
          <button
            onClick={() => onNavigate('signin')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    const updatedUser: UserType = {
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      avatar: formData.avatar
    };
    onUpdateProfile(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      location: user.location || '',
      avatar: user.avatar || ''
    });
    setIsEditing(false);
  };

  const stats = user.role === 'farmer' 
    ? [
        { label: 'Products Listed', value: '12', icon: <Package className="w-5 h-5" /> },
        { label: 'Orders Received', value: '48', icon: <ShoppingBag className="w-5 h-5" /> },
        { label: 'Average Rating', value: '4.8', icon: <Star className="w-5 h-5" /> },
        { label: 'Member Since', value: new Date(user.joinDate).getFullYear().toString(), icon: <Calendar className="w-5 h-5" /> }
      ]
    : [
        { label: 'Orders Placed', value: '24', icon: <ShoppingBag className="w-5 h-5" /> },
        { label: 'Favorite Products', value: '8', icon: <Star className="w-5 h-5" /> },
        { label: 'Reviews Given', value: '15', icon: <Star className="w-5 h-5" /> },
        { label: 'Member Since', value: new Date(user.joinDate).getFullYear().toString(), icon: <Calendar className="w-5 h-5" /> }
      ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              {/* Avatar Section */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
                    {user.avatar ? (
                      <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-full h-full p-6 text-gray-400" />
                    )}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-4 right-0 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <p className="text-gray-600 capitalize">{user.role}</p>
                <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  Joined {new Date(user.joinDate).toLocaleDateString()}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-gray-600 mr-3">{stat.icon}</div>
                      <span className="text-sm text-gray-600">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-4 py-2 text-green-600 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCancel}
                      className="flex items-center px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <User className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.phone || 'Not provided'}</span>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your location"
                    />
                  ) : (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.location || 'Not provided'}</span>
                    </div>
                  )}
                </div>

                {/* Role Badge */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      user.role === 'farmer' ? 'bg-green-400' : 'bg-blue-400'
                    }`} />
                    <span className="text-gray-900 capitalize">{user.role}</span>
                    <span className="ml-auto text-xs text-gray-500">Cannot be changed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive updates about orders and new products</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">SMS Notifications</p>
                    <p className="text-sm text-gray-600">Get text messages for urgent updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;