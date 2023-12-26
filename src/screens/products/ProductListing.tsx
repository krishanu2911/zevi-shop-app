import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../fakerData/products";
import { useProductStore } from "../../store/productStore";
import { getFilteredProducts } from "./utils";

const ProductListing = () => {
  const { setProducts, products, ratingFilter, priceFilterRange } =
    useProductStore((state) => ({
      setProducts: state.setProducts,
      products: state.products,
      ratingFilter: state.ratingFilter,
      priceFilterRange: state.priceFilterRange,
    }));

  useEffect(() => {
    const productsData = getProducts(5);
    setProducts(productsData);

    return () => setProducts([]);
  }, []);

  const filteredProducts = getFilteredProducts(
    ratingFilter,
    priceFilterRange,
    products
  );

  return (
    <div className="flex-1 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 pt-12 ">
      {filteredProducts.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
};

export default ProductListing;
