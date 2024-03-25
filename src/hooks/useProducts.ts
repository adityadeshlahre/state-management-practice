import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface UseProductsReturn {
  products: Product[];
  filteredProducts: Product[];
  filter: string;
  setFilter: (filter: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (id: number) => void;
}

const limit: number = 8;

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  // Add a new product (simulated locally)
  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  // Update an existing product (simulated locally)
  const updateProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Delete a product (simulated locally)
  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return {
    products,
    filteredProducts,
    filter,
    setFilter,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};
