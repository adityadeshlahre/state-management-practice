import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 m-4 hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {product.title}
      </h2>
      <div
        className={`text-sm text-gray-600 mb-2 text-center ${
          isExpanded ? "line-clamp-none" : "line-clamp-2"
        }`}
      >
        {product.description}
      </div>
      <button
        onClick={toggleDescription}
        className="text-blue-500 text-sm underline mb-2"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
      <div className="text-lg font-bold text-green-600 mb-1">
        Price: ${product.price}
      </div>
      <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
        <li>{product.category}</li>
      </ul>
    </div>
  );
};

export default ProductItem;
