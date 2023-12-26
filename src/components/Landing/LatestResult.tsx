import { Link } from "react-router-dom";
import { getPopularSuggestion, getProducts } from "../../fakerData/products";
import { productInterface } from "../../models/products";

const LatestResult = () => {
  const latestTrends: productInterface[] = getProducts(5);
  const popularSuggestion: string[] = getPopularSuggestion(5);

  return (
    <div
      className=" w-full h-10 bg-white rounded mt-2 shadow-md"
    >
      <Link to="/products">
        <h1>Latest Trends</h1>
      </Link>
    </div>
  );
};

export default LatestResult;
