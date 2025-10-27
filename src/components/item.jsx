import { NavLink } from "react-router-dom";

export default function Item({ product }) {
  return (
    <NavLink
      to={`/producto/${product.id}`}
      className="group bg-card rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.origin}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${product.price}</span>
          <span className="text-sm text-muted-foreground">Tostado {product.roast}</span>
        </div>
      </div>
    </NavLink>
  );
}