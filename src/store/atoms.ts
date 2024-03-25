import { atom } from "recoil";
import { Product } from "../hooks/useProducts";

export const productState = atom<Product[]>({
  key: "productState",
  default: [],
});

export const filterState = atom<string>({
  key: "filterState",
  default: "",
});
