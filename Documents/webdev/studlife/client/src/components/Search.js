import React from "react";

import CountryDropdown from "./CountryDropdown.js";
import PropertyDropdown from "./PropertyDropdown.js";
import PriceRangeDropdown from "./PriceRangeDropdown.js";

import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <div
      className="relative mx-auto flex max-w-[1170px]
   flex-col justify-between gap-4 rounded-lg bg-white px-[30px] 
   py-6 lg:-top-4 lg:flex-row lg:gap-x-3 lg:bg-transparent 
   lg:shadow-1 lg:backdrop-blur "
    >
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button>
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
