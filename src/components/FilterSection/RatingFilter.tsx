import { useState } from "react";
import { downArrow } from "../../constants/imageUrl";
import { useProductStore } from "../../store/productStore";
import Rating from "../Rating";




const RatingFilter = () => {
  const [itemVisible, setItemVisible] = useState<boolean>(false);
  const { setRatingFilter, ratingFilter } = useProductStore((state) => ({
    setRatingFilter: state.setRatingFilter,
    ratingFilter: state.ratingFilter
  }));
  const ratingFilters:number[] = [1,2,3,4,5]

  return (
    <div className="w-full border-b border-black/20 pb-4">
      <div
        onClick={() => setItemVisible((prev) => !prev)}
        className="cursor-pointer flex justify-between items-center"
      >
        <h1 className="font-medium text-lg">Rating</h1>
        <img src={downArrow} className="w-6 object-contain" />
      </div>
      {itemVisible ? (
        <div className="flex flex-col gap-2 mt-2">
          {ratingFilters.map((item) => {
            return (
              <div className=" flex flex-wrap gap-2">
                <input
                  type="radio"
                  name="ratingFilter"
                  id={`item_${item}`}
                  checked={item === ratingFilter}
                  value={item}
                  onChange={() => setRatingFilter(item)}
                />
                <label className=" flex flex-wrap" htmlFor={`item_${item}`}>
                  <Rating score={item} /><span className=" text-sm text-black/50">& up</span> 
                </label>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default RatingFilter;