import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
            ¡Bienvenidos a Aroma! Descubre los mejores cafés del mundo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Explora nuestra selección de cafés premium de origen único, cuidadosamente seleccionados de las mejores
            plantaciones del mundo
          </p>
          <NavLink
            to="/productos"
            className="inline-flex hover:bg-gray-100 hover:shadow-lg bg-transparent items-center gap-2 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Ver Catálogo
            <ArrowRight className="h-5 w-5" />
          </NavLink>
        </div>
      </section>

      <section className="py-16 bg-muted/50 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir Aroma?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center border border-gray-300 shadow-lg rounded-xl p-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-muted-foreground">
                Seleccionamos solo los mejores granos de café de plantaciones certificadas
              </p>
            </div>
            <div className="text-center border border-gray-300 shadow-lg rounded-xl p-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Origen Único</h3>
              <p className="text-muted-foreground">Cafés de origen único de las mejores regiones cafeteras del mundo</p>
            </div>
            <div className="text-center border border-gray-300 shadow-lg rounded-xl py-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tostado Artesanal</h3>
              <p className="text-muted-foreground">Tostado en pequeños lotes para garantizar frescura y sabor óptimo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}