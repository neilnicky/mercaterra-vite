import React from 'react';
import { Leaf, Users, Truck, Shield, ArrowRight, Star } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Fresh & Organic",
      description: "Direct from farm to your table. Get the freshest produce without any middlemen."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Support Local Farmers",
      description: "Connect directly with local farmers and support your community's agriculture."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery from farm to your doorstep within 24-48 hours."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Guaranteed",
      description: "Every product is quality-checked and comes with our freshness guarantee."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Chef",
      content: "The vegetables I get from FarmMarket are incredibly fresh. I can taste the difference!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=srgb&dpr=1&w=100"
    },
    {
      name: "Mike Chen",
      role: "Restaurant Owner",
      content: "As a restaurant owner, quality is everything. FarmMarket delivers consistent, high-quality produce.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=srgb&dpr=1&w=100"
    },
    {
      name: "Emily Davis",
      role: "Nutrition Coach",
      content: "I recommend FarmMarket to all my clients. Fresh, organic, and competitively priced.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=srgb&dpr=1&w=100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fresh from
                <span className="text-green-600"> Farm</span>
                <br />
                Direct to
                <span className="text-green-600"> You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect directly with local farmers and get the freshest produce delivered to your doorstep. 
                No middlemen, just pure farm-fresh goodness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('market')}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Join as Farmer
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=srgb&dpr=1&w=600"
                alt="Fresh vegetables"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-gray-600">Fresh Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FarmMarket?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We connect you directly with local farmers, ensuring the freshest produce and supporting your community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get farm-fresh produce delivered to your door
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browse Products</h3>
              <p className="text-gray-600">
                Explore fresh produce from local farmers in your area. Filter by organic, price, and location.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Place Order</h3>
              <p className="text-gray-600">
                Add items to your cart and checkout securely. Choose your preferred delivery time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enjoy Fresh Food</h3>
              <p className="text-gray-600">
                Receive fresh produce at your doorstep within 24-48 hours. Enjoy farm-to-table quality!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of customers who trust FarmMarket for their fresh produce needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('signup')}
              className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Started Today
            </button>
            <button
              onClick={() => onNavigate('market')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;