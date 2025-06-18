import React from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { AppState } from '../../types';

interface NavigationProps {
  appState: AppState;
  onNavigate: (page: string) => void;
  onSignOut: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ appState, onNavigate, onSignOut }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { currentUser, cart } = appState;

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const publicPages = [
    { id: 'landing', label: 'Home' },
    { id: 'market', label: 'Market' },
  ];

  const farmerPages = [
    { id: 'farmer-dashboard', label: 'Dashboard' },
    { id: 'product-management', label: 'My Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'profile', label: 'Profile' },
  ];

  const buyerPages = [
    { id: 'buyer-dashboard', label: 'Dashboard' },
    { id: 'market', label: 'Market' },
    { id: 'orders', label: 'My Orders' },
    { id: 'profile', label: 'Profile' },
  ];

  const getNavPages = () => {
    if (!currentUser) return publicPages;
    return currentUser.role === 'farmer' ? farmerPages : buyerPages;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('landing')}
          >
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FarmMarket</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavPages().map((page) => (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {page.label}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {currentUser?.role === 'buyer' && (
              <button
                onClick={() => onNavigate('cart')}
                className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            )}

            {currentUser ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                  {currentUser.avatar ? (
                    <img src={currentUser.avatar} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-full h-full p-1 text-gray-600" />
                  )}
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700">
                  {currentUser.name}
                </span>
                <button
                  onClick={onSignOut}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('signin')}
                  className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors px-3 py-2"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="bg-green-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {getNavPages().map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onNavigate(page.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;