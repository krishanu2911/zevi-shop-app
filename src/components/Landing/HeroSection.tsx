import { useState } from "react";
import SearchBar from "../SearchBar";
import LatestResult from "./LatestResult";

const HeroSection = () => {
  const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false);

  const onFocusHandler = () => {
    setSearchBarFocused(true);
  };

  const onBlurHandler = () => {
    setSearchBarFocused(false);
  };
  return (
    <div className="w-full h-full flex justify-center pt-16">
      <div className=" md:w-1/2 w-3/4 h-12 relative">
        <div className=" w-full px-6">
          <SearchBar onFocusFunc={onFocusHandler} onBlurFunc={onBlurHandler} />
        </div>
        {searchBarFocused ? (
          <LatestResult />
        ) : null}
      </div>
    </div>
  );
};

export default HeroSection;
