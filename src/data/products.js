export const products = [
{
    id: "1",
    name: "Café Colombiano Supremo",
    category: "origen",
    price: 18.99,
    description:
    "Un café suave y aromático con notas de caramelo y chocolate. Cultivado en las montañas de Colombia, este café ofrece un sabor equilibrado perfecto para cualquier momento del día.",
    image: "/coffee3.jpg",
    origin: "Colombia",
    roast: "Medio",
    stock: 25,
},
{
    id: "2",
    name: "Espresso Italiano Intenso",
    category: "tostado",
    price: 22.99,
    description:
    "Tostado oscuro con cuerpo completo y sabor intenso. Ideal para espresso, con notas de cacao amargo y un final persistente que deleitará a los amantes del café fuerte.",
    image: "/coffee2.jpg",
    origin: "Italia",
    roast: "Oscuro",
    stock: 30,
},
{
    id: "3",
    name: "Café Etíope Yirgacheffe",
    category: "origen",
    price: 24.99,
    description:
    "Café de origen único con notas florales y cítricas. Considerado uno de los mejores cafés del mundo, ofrece una experiencia sensorial única con su perfil de sabor complejo.",
    image: "/coffee2.jpg",
    origin: "Etiopía",
    roast: "Claro",
    stock: 15,
},
{
    id: "4",
    name: "Blend Aroma Signature",
    category: "blend",
    price: 19.99,
    description:
    "Nuestra mezcla exclusiva que combina granos de América y África. Un balance perfecto entre acidez y dulzura, con notas de frutos secos y chocolate con leche.",
    image: "/coffee3.jpg",
    origin: "Blend",
    roast: "Medio",
    stock: 40,
},
{
    id: "5",
    name: "Café Brasileño Santos",
    category: "origen",
    price: 16.99,
    description:
    "Café suave con bajo nivel de acidez y notas de nuez. Perfecto para quienes prefieren un café más suave y cremoso, ideal para tomar con leche.",
    image: "/coffee2.jpg",
    origin: "Brasil",
    roast: "Medio",
    stock: 35,
},
{
    id: "6",
    name: "Tostado Francés Premium",
    category: "tostado",
    price: 21.99,
    description:
    "Tostado muy oscuro con sabor ahumado y robusto. Para los verdaderos amantes del café fuerte, con un cuerpo denso y notas de especias.",
    image: "/coffee3.jpg",
    origin: "Francia",
    roast: "Muy Oscuro",
    stock: 20,
},
{
    id: "7",
    name: "Café Guatemalteco Antigua",
    category: "origen",
    price: 23.99,
    description:
    "Café con cuerpo medio y acidez brillante. Cultivado en la región volcánica de Antigua, ofrece notas de chocolate oscuro y especias con un final limpio.",
    image: "/coffee2.jpg",
    origin: "Guatemala",
    roast: "Medio-Oscuro",
    stock: 18,
},
{
    id: "8",
    name: "Descafeinado Suizo",
    category: "especial",
    price: 20.99,
    description:
    "Descafeinado mediante proceso suizo de agua. Mantiene todo el sabor del café sin la cafeína, perfecto para disfrutar en cualquier momento sin preocupaciones.",
    image: "/coffee2.jpg",
    origin: "Suiza",
    roast: "Medio",
    stock: 22,
},
]

export const categories = [
{ id: "todos", name: "Todos los Productos" },
{ id: "origen", name: "Cafés de Origen" },
{ id: "tostado", name: "Por Tostado" },
{ id: "blend", name: "Blends Especiales" },
{ id: "especial", name: "Especiales" },
]

// Simular llamada asíncrona a API
export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products)
    }, 1000)
})
}

export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => {
    if (categoryId === "todos") {
        resolve(products)
    } else {
        resolve(products.filter((product) => product.category === categoryId))
    }
    }, 1000)
})
}

export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products.find((product) => product.id === id))
    }, 800)
})
}
