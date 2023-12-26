// import Accordion from "./Accordion";
import ClearFilter from "./ClearFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

const FilterSection = () => {
  return (
    <div className="flex flex-col  mr-4">
      <PriceFilter />
      <RatingFilter />
      <ClearFilter />
    </div>
  );
};

export default FilterSection;
