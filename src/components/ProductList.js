const ProductCard = ({ name, price, image, description }) => (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-blue-800 font-bold mt-2">{price}</p>
        <button className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">
            Add to Cart
        </button>
    </div>
);

const ProductList = () => {
    const products = [
        {
            name: "Afro Mannequin Classic",
            price: "₦25,000",
            image: "https://via.placeholder.com/300x200?text=Afro+Mannequin",
            description: "High-quality afro mannequin for salon displays."
        },
        {
            name: "Natural Hairpiece",
            price: "₦15,000",
            image: "https://via.placeholder.com/300x200?text=Hairpiece",
            description: "Premium natural hairpiece for versatile styling."
        },
        {
            name: "Curly Afro Wig",
            price: "₦20,000",
            image: "https://via.placeholder.com/300x200?text=Curly+Wig",
            description: "Vibrant curly afro wig for bold looks."
        }
    ];

    return (
        <section id="products" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
