// import Accordion from "./Accordion";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

const FilterSection = () => {
  return (
    <div className="flex flex-col  mr-4">
      <PriceFilter />
      <RatingFilter />
    </div>
  );
};

export default FilterSection;
