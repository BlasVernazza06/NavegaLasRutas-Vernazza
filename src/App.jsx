import { useState } from "react"
import { Route, Routes } from "react-router"
import Navbar from "./components/nav-bar"
import Home from "./components/home"
import ItemListContainer from "./components/itemlist-container"
import ItemDetailContainer from "./components/item-detail-container"
import Cart from "./components/cart"
import NotFound from "./components/not-found"


function App() {
  const [cart, setCart] = useState([])

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem,
        )
      }

      return [...prevCart, { ...item, quantity }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar getTotalItems={getTotalItems} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:itemId" element={<ItemDetailContainer addToCart={addToCart} isInCart={isInCart} />} />
          <Route
            path="/carrito"
            element={
              <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} getTotalPrice={getTotalPrice} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
