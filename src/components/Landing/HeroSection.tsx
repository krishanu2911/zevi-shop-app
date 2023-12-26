import { useRef, useState } from "react";
import LatestResult from "./LatestResult";
import HeroSearchBar from "./HeroSearchBar";

const HeroSection = () => {
  const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-full flex justify-center pt-16">
      <div className=" md:w-1/2 w-3/4 h-12 relative">
        <div className=" w-full px-6">
          <HeroSearchBar
            setSearchBarFocused={setSearchBarFocused}
            containerRef={containerRef}
          />
        </div>
        {searchBarFocused ? (
          <div className=" w-full absolute">
            <LatestResult />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSection;
