export default function ItemListContainer({ greeting }) {
    return (
        <section className="container mx-auto px-4 py-20">
            {/* Mensaje de bienvenida usando props */}
            <div className="text-center mb-8 p-6 bg-orange-50 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">
                    {greeting}
                </h2>
                <p className="text-lg text-gray-600">
                    Próximamente encontrarás aquí nuestro catálogo de productos
                </p>
            </div>
        </section>
    );
}