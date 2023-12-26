import { useState } from "react";
import { downArrow } from "../../constants/imageUrl";

const Accordion = () => {
  const [itemVisible, setItemVisible] = useState<boolean>(false);
  return (
    <div className="w-full border-b border-black/20 pb-4">
      <div
        onClick={() => setItemVisible((prev) => !prev)}
        className="cursor-pointer flex justify-between items-center"
      >
        <h1 className="font-medium text-lg">Brand</h1>
        <img src={downArrow} className="w-6 object-contain" />
      </div>
      {itemVisible ? (
        <div className="flex flex-col">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
