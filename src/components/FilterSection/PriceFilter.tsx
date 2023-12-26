import { useState } from "react";
import { downArrow } from "../../constants/imageUrl";
import { useProductStore } from "../../store/productStore";

type priceLabelType = "Under 200" | "200-500" | "500+";

interface priceFilterInterface {
  priceLable: priceLabelType;
  range: number[];
}

const priceFilters: priceFilterInterface[] = [
  { priceLable: "Under 200", range: [0, 199] },
  { priceLable: "200-500", range: [200, 499] },
  { priceLable: "500+", range: [500, 1000] },
];

const PriceFilter = () => {
  const [itemVisible, setItemVisible] = useState<boolean>(false);
  const { setPriceFilterRange, priceFilterRange } = useProductStore(
    (state) => ({
      setPriceFilterRange: state.setPriceFilterRange,
      priceFilterRange: state.priceFilterRange,
    })
  );

  return (
    <div className="w-full border-b border-black/20 pb-4">
      <div
        onClick={() => setItemVisible((prev) => !prev)}
        className="cursor-pointer flex justify-between items-center"
      >
        <h1 className="font-medium text-lg">Price Range</h1>
        <img src={downArrow} className="w-6 object-contain" />
      </div>
      {itemVisible ? (
        <div className="flex flex-col gap-2 mt-2">
          {priceFilters.map((item) => {
            return (
              <div className=" flex gap-2">
                <input
                  type="radio"
                  name="priceFilter"
                  id={`item_${item.priceLable}`}
                  value={item.priceLable}
                  checked={item.range === priceFilterRange}
                  onChange={() => setPriceFilterRange(item.range)}
                />
                <label htmlFor={`item_${item.priceLable}`}>
                  {item.priceLable}
                </label>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default PriceFilter;
