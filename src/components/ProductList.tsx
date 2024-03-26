import ProductItem from "./ProductItem";
import Filter from "./Filter";
import { Product } from "../hooks/useProducts";

interface ProductListProps {
  filteredProducts: Product[];
  filter: string;
  setFilter: (filter: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  filteredProducts,
  filter,
  setFilter,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-center mb-6">
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-double border-cyan-300"
          >
            <ProductItem key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
