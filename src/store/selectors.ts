import { selector } from "recoil";
import { productState, filterState } from "./atoms";
import { Product } from "../hooks/useProducts";

export const filteredProductState = selector({
  key: "filteredProductState",
  get: ({ get }) => {
    const products = get(productState);
    const filter = get(filterState).toLowerCase();
    return products.filter((product: Product) =>
      product.title.toLowerCase().includes(filter)
    );
  },
});
