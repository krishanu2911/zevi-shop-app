import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../fakerData/products";
import { useProductStore } from "../../store/productStore";
import ProductListing from "./ProductListing";

const ProductsScreen = () => {
  return (
    <div className=" w-full h-full flex flex-col ">
      <Header searchBar={true} />
      <div className=" flex-1 px-6 flex flex-col">
        <div className=" flex-1 flex mt-8 ">
          <div className=" w-1/4 ">
            <h1 className=" md:text-2xl sm:text-sm text-xs font-medium">
              Search Results
            </h1>
          </div>
          <ProductListing />
          {/* <div className="flex-1 grid md:grid-cols-4 grid-cols-2  gap-4 pt-8 ">
            {products.map((item) => (
              <ProductCard product={item} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
