import { NavLink } from "react-router-dom";
import { ShoppingCart, Coffee } from "lucide-react";

export default function Navbar({ getTotalItems }) {
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <Coffee className="h-6 w-6" />
          <span className="text-orange-500">Aroma</span>
        </NavLink>

        <div className="flex items-center gap-4">
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary hover:bg-gray-100 p-2 rounded-xl ${
                isActive ? "text-primary" : "text-foreground"
              }`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary hover:bg-gray-100 p-2 rounded-xl  ${
                isActive ? "text-primary" : "text-foreground"
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary hover:bg-gray-100 p-2 rounded-xl  ${
                isActive ? "text-primary" : "text-foreground"
              }`
            }
          >
            Contacto
          </NavLink>

          <NavLink to="/carrito" className="relative">
            <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}