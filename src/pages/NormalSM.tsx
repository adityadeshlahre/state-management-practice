import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Product, useProducts } from "../hooks/useProducts";

const NormalSM = () => {
  const { products } = useProducts();
  const [filter, setFilter] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, products]);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => {
              window.location.assign("/recoil");
            }}
            className="border-4 border-amber-300 m-2 p-2"
          >
            /recoilSM
          </button>
        </div>

        <h1 className="text-2xl text-center">Normal State Management</h1>
        <div className="flex flex-col">
          <ProductList
            filteredProducts={filteredProducts}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </>
  );
};

export default NormalSM;
