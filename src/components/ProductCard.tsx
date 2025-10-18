import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  colorways: string;
  price: string;
  label?: string;
}

export function ProductCard({ image, name, category, colorways, price, label }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {label && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
            <span className="text-orange-600">{label}</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-orange-600">{label || 'Just In'}</p>
        <h3 className="text-gray-900">{name}</h3>
        <p className="text-gray-500">{category}</p>
        <p className="text-gray-500">{colorways}</p>
        <p className="text-gray-900 mt-2">₹ {price}</p>
      </div>
    </div>
  );
}
