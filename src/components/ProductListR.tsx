import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productState, filterState } from "../store/atoms";
import { filteredProductState } from "../store/selectors";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import { BASE_URL } from "../utils";

const limit: number = 8;

const ProductListR: React.FC = () => {
  const filteredProducts = useRecoilValue(filteredProductState);
  const setFilter = useSetRecoilState(filterState);
  const setProducts = useSetRecoilState(productState);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [setProducts]);

  return (
    <div>
      <div className="flex justify-center mb-6">
        <Filter setFilter={setFilter} filter={""} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div className="border-2 border-double border-cyan-300">
            <ProductItem key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListR;
