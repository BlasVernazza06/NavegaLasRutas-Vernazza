import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./item-count";
import { ArrowLeft, Check } from "lucide-react";

export default function ItemDetail({ product, addToCart }) {
  const navigate = useNavigate();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAddToCart = (quantity) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity
    );
    setQuantityAdded(quantity);
  };

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-gray-200 p-1.5 rounded-xl text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-muted-foreground text-lg">{product.origin}</p>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold text-primary">${product.price}</span>
          </div>

          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Tostado:</span>
              <span className="text-muted-foreground">{product.roast}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Stock disponible:</span>
              <span className="text-muted-foreground">{product.stock} unidades</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">Descripción</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-auto">
            {quantityAdded > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">
                    {quantityAdded} {quantityAdded === 1 ? "unidad agregada" : "unidades agregadas"} al carrito
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate("/productos")}
                    className="flex-1 px-6 py-3 border border-input rounded-lg font-semibold hover:bg-secondary transition-colors"
                  >
                    Seguir Comprando
                  </button>
                  <button
                    onClick={() => navigate("/carrito")}
                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Ir al Carrito
                  </button>
                </div>
              </div>
            ) : (
              <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}