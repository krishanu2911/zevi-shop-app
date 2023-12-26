import { Link } from "react-router-dom";
import { getPopularSuggestion, getProducts } from "../../fakerData/products";
import { productInterface } from "../../models/products";

const LatestResult = () => {
  const latestTrends: productInterface[] = getProducts(5);
  const popularSuggestion: string[] = getPopularSuggestion(5);

  return (
    <div className=" w-full bg-white rounded mt-2 shadow-md p-4 flex flex-col gap-4 max-h-80 overflow-y-scroll">
      <h1 className=" font-semibold text-base">Latest Trends</h1>
      <div className=" grid md:grid-cols-5 md:grid-rows-1 grid-cols-3 grid-rows-2 gap-4">
        {latestTrends.map((item) => {
          return (
            <Link to="/products">
              <div className=" flex flex-col items-start">
                <img src={item.productImg} className="object-contain" />
                <h1 className=" text-xs max-w-[20ch]">{item.productName}</h1>
              </div>
            </Link>
          );
        })}
      </div>
      <h1 className="font-semibold text-base">Popular suggestion</h1>
      <div className=" flex flex-col items-start gap-2">
        {popularSuggestion.map((item) => {
          return (
            <Link to="/products">
              <h1 className=" text-xs ">{item}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LatestResult;
