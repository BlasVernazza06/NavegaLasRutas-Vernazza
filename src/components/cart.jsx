import { NavLink } from "react-router-dom"
import { Trash2, ShoppingBag } from "lucide-react"


export default function Cart({ cart, removeFromCart, clearCart, getTotalPrice }) {
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-8">Agrega productos a tu carrito para continuar con tu compra</p>
          <NavLink
            to="/productos"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Ver Productos
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Carrito de Compras</h1>
          <button
            onClick={clearCart}
            className="text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            Vaciar carrito
          </button>
        </div>

        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 bg-card border rounded-lg p-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-muted-foreground mb-2">Cantidad: {item.quantity}</p>
                <p className="text-primary font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-3xl font-bold text-primary">${getTotalPrice().toFixed(2)}</span>
          </div>
          <button className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  )
}
