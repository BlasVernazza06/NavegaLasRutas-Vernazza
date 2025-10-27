import Item from "./item";

export default function ItemList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}