import React from "react";

const Shop = () => {
  const products = [
    {
      name: "The Lamp Set",
      price: 250,
      image: "/Product Card (3).png",
    },
    {
      name: "Rustic Vase Set",
      price: 155,
      image: "/Product Card (4).png",
    },
    {
      name: "The chair",
      price: 125,
      image: "/Product Card (5).png",
    },
    {
      name: "The Dandy Chair",
      price: 399,
      image: "/Product Card (6).png",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
      
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] sm:h-[250px] md:h-[275px] object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-base">£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
