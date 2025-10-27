import { NavLink } from "react-router-dom";
import { categories } from "../data/products";

export default function CategoryFilter() {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <NavLink
        to="/productos"
        end
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium transition-colors ${
            isActive
              ? "bg-orange-500 text-white"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`
        }
      >
        Todos
      </NavLink>
      {categories.slice(1).map((category) => (
        <NavLink
          key={category.id}
          to={`/categoria/${category.id}`}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive
                ? "bg-orange-500 text-white"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`
          }
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}