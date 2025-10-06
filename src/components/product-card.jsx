import { ShoppingCart } from "lucide-react";


export const ProductCard = ({ image, name, origin, price, description }) => {
  return (
    <div className="rounded-xl group overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <h3 className="font-bold text-xl text-foreground">{name}</h3>
          <p className="text-sm text-gray-400">{origin}</p>
        </div>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-orange-400">${price}</span>
          <button size="sm" className="flex items-center gap-2 bg-orange-400 text-white rounded-lg p-2">
            <ShoppingCart className="w-4 h-4" />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};
