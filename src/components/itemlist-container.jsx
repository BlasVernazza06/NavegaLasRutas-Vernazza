import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory, categories } from "../data/products";
import ItemList from "./item-list";
import CategoryFilter from "./category-filter";
import { Loader2 } from "lucide-react";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts();

    fetchProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const categoryName = categoryId 
    ? categories.find(c => c.id === categoryId)?.name 
    : "Todos los Productos";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {categoryId ? `Categoría: ${categoryName}` : "Todos los Productos"}
        </h1>
        <p className="text-muted-foreground">Descubre nuestra selección de cafés premium</p>
      </div>

      <CategoryFilter />

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No se encontraron productos en esta categoría</p>
        </div>
      )}
    </div>
  );
}