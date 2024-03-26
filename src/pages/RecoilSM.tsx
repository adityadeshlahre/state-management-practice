import { useRecoilState, useRecoilValue } from "recoil";
import { filterState, productState } from "../store/atoms";
import { filteredProductState } from "../store/selectors";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import ProductList from "../components/ProductList";

const RecoilSM = () => {
  const { products } = useProducts();
  const [recoilProducts, setRecoilProducts] = useRecoilState(productState);
  const [filter, setFilter] = useRecoilState(filterState);
  const filteredProducts = useRecoilValue(filteredProductState);

  useEffect(() => {
    setRecoilProducts(products);
  }, [products, setRecoilProducts]);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => {
              window.location.assign("/");
            }}
            className="border-4 border-amber-300 m-2 p-2"
          >
            /normalSM
          </button>
        </div>

        <h1 className="text-2xl text-center">Recoil State Management</h1>
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

export default RecoilSM;
