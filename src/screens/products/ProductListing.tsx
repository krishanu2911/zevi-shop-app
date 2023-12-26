import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../fakerData/products";
import { useProductStore } from "../../store/productStore";

const ProductListing = () => {
  const { setProducts, products } = useProductStore(
    (state) => ({
      setProducts: state.setProducts,
      products: state.products,
    })
  );

  useEffect(() => {
    const productsData = getProducts(5);
    setProducts(productsData);

    return () => setProducts([]);
  }, []);

  return (
    <div className="flex-1 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 pt-12 ">
      {products.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
};

export default ProductListing;
