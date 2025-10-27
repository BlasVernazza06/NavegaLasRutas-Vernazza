import { Link } from "react-router-dom"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
        <p className="text-muted-foreground mb-8">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Home className="h-5 w-5" />
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
