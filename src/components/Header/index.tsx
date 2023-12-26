import React from "react";
import ZeviLogoComp from "../ZeviLogo";
import SearchBar from "../SearchBar";

interface Props {
  searchBar?: boolean;
}

const Header: React.FC<Props> = ({ searchBar }) => {
  return (
    <div className=" w-full h-14 flex justify-center items-end  relative pt-4">
      {searchBar ? (
        <div className=" w-1/2 h-10">
          <SearchBar border={searchBar} />
        </div>
      ) : null}
      <div className=" w-12 absolute right-6 bottom-0">
        <ZeviLogoComp />
      </div>
    </div>
  );
};

export default Header;
