import React from 'react';
import { Star, MapPin, Calendar, Leaf } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onEdit?: (product: Product) => void;
  showActions?: boolean;
  variant?: 'default' | 'compact';
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onEdit,
  showActions = true,
  variant = 'default'
}) => {
  const isCompact = variant === 'compact';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className={`relative ${isCompact ? 'h-32' : 'h-48'} bg-gray-200 overflow-hidden`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.organic && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <Leaf className="w-3 h-3 mr-1" />
            Organic
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={isCompact ? 'p-3' : 'p-4'}>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`font-semibold text-gray-900 ${isCompact ? 'text-sm' : 'text-lg'}`}>
            {product.name}
          </h3>
          <div className="text-right">
            <div className={`font-bold text-green-600 ${isCompact ? 'text-sm' : 'text-lg'}`}>
              ${product.price}
            </div>
            <div className={`text-gray-500 ${isCompact ? 'text-xs' : 'text-sm'}`}>
              per {product.unit}
            </div>
          </div>
        </div>

        {!isCompact && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className={`flex items-center ${isCompact ? 'text-xs' : 'text-sm'} text-gray-500 mb-2`}>
          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
          <span className="mr-2">{product.rating}</span>
          <span className="mr-3">({product.reviewCount} reviews)</span>
          <MapPin className="w-4 h-4 mr-1" />
          <span>{product.location}</span>
        </div>

        {!isCompact && (
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Harvested: {new Date(product.harvestDate).toLocaleDateString()}</span>
          </div>
        )}

        <div className="text-sm text-gray-600 mb-3">
          <span className="font-medium">{product.farmerName}</span>
          <span className="mx-2">•</span>
          <span>{product.quantity} {product.unit} available</span>
        </div>

        {showActions && (
          <div className="flex space-x-2">
            {onAddToCart && product.inStock && (
              <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Add to Cart
              </button>
            )}
            {onEdit && (
              <button
                onClick={() => onEdit(product)}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Edit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;