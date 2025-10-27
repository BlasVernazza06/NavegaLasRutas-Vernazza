import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="text-2xl font-semibold w-12 text-center">{count}</span>
        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={handleAdd}
        disabled={stock === 0}
        className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white cursor-pointer px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ShoppingCart className="h-5 w-5" />
        Agregar al Carrito
      </button>
    </div>
  );
}