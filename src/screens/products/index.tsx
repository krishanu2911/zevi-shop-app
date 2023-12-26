import FilterSection from "../../components/FilterSection";
import Header from "../../components/Header";
import ProductListing from "./ProductListing";

const ProductsScreen = () => {
  return (
    <div className=" w-full h-full flex flex-col ">
      <Header searchBar={true} />
      <div className=" flex-1 px-6 flex flex-col">
        <div className=" flex-1 flex mt-8 ">
          <div className=" w-1/4 ">
            <h1 className=" md:text-2xl sm:text-sm text-xs font-medium mb-4">
              Search Results
            </h1>
            <FilterSection />
          </div>
          <ProductListing />
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
