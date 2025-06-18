import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import LandingPage from './components/pages/LandingPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import FarmerDashboard from './components/pages/FarmerDashboard';
import BuyerDashboard from './components/pages/BuyerDashboard';
import MarketFeed from './components/pages/MarketFeed';
import ProductManagement from './components/pages/ProductManagement';
import CartCheckout from './components/pages/CartCheckout';
import OrdersPage from './components/pages/OrdersPage';
import ProfilePage from './components/pages/ProfilePage';
import { AppState, User, Product, CartItem } from './types';
import { mockUsers } from './data/mockData';

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentUser: null,
    currentPage: 'landing',
    cart: []
  });

  const handleNavigate = (page: string) => {
    setAppState(prev => ({ ...prev, currentPage: page }));
  };

  const handleSignIn = (email: string, password: string, role: 'farmer' | 'buyer') => {
    // Mock authentication - in real app, this would make API call
    const user = mockUsers.find(u => u.email === email && u.role === role);
    if (user) {
      setAppState(prev => ({
        ...prev,
        currentUser: user,
        currentPage: role === 'farmer' ? 'farmer-dashboard' : 'buyer-dashboard'
      }));
      return true;
    }
    return false;
  };

  const handleSignUp = (userData: Partial<User>) => {
    // Mock user creation
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'buyer',
      phone: userData.phone || '',
      location: userData.location || '',
      joinDate: new Date().toISOString().split('T')[0]
    };

    setAppState(prev => ({
      ...prev,
      currentUser: newUser,
      currentPage: newUser.role === 'farmer' ? 'farmer-dashboard' : 'buyer-dashboard'
    }));
  };

  const handleSignOut = () => {
    setAppState(prev => ({
      ...prev,
      currentUser: null,
      currentPage: 'landing',
      cart: []
    }));
  };

  const handleAddToCart = (product: Product) => {
    setAppState(prev => {
      const existingItem = prev.cart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return {
          ...prev,
          cart: prev.cart.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...prev,
          cart: [...prev.cart, { product, quantity: 1 }]
        };
      }
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setAppState(prev => ({
      ...prev,
      cart: prev.cart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    }));
  };

  const handleRemoveFromCart = (productId: string) => {
    setAppState(prev => ({
      ...prev,
      cart: prev.cart.filter(item => item.product.id !== productId)
    }));
  };

  const handleUpdateProfile = (updatedUser: User) => {
    setAppState(prev => ({
      ...prev,
      currentUser: updatedUser
    }));
  };

  const renderCurrentPage = () => {
    switch (appState.currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      
      case 'signin':
        return <SignInPage onSignIn={handleSignIn} onNavigate={handleNavigate} />;
      
      case 'signup':
        return <SignUpPage onSignUp={handleSignUp} onNavigate={handleNavigate} />;
      
      case 'farmer-dashboard':
        return <FarmerDashboard onNavigate={handleNavigate} />;
      
      case 'buyer-dashboard':
        return (
          <BuyerDashboard 
            onNavigate={handleNavigate} 
            onAddToCart={handleAddToCart}
          />
        );
      
      case 'market':
        return <MarketFeed onAddToCart={handleAddToCart} />;
      
      case 'product-management':
        return <ProductManagement onNavigate={handleNavigate} />;
      
      case 'cart':
        return (
          <CartCheckout
            cart={appState.cart}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveFromCart}
            onNavigate={handleNavigate}
          />
        );
      
      case 'orders':
        return <OrdersPage userRole={appState.currentUser?.role || 'buyer'} />;
      
      case 'profile':
        return (
          <ProfilePage
            user={appState.currentUser}
            onUpdateProfile={handleUpdateProfile}
            onNavigate={handleNavigate}
          />
        );
      
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - only show on non-landing pages or when user is signed in */}
      {(appState.currentPage !== 'landing' || appState.currentUser) && (
        <Navigation
          appState={appState}
          onNavigate={handleNavigate}
          onSignOut={handleSignOut}
        />
      )}
      
      {/* Main Content */}
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;