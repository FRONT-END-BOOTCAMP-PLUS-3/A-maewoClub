"use client";

import React from "react";
import { SearchInput, SearchIcon, SearchForm } from "./searchBar.style";

const SearchBar = () => {
  const SearchIconSvg = "/search.svg";
  return (
    <SearchForm>
      {SearchIconSvg && (
        <SearchIcon
          src={SearchIconSvg}
          alt="Search Icon"
          width={100}
          height={100}
        />
      )}
      <SearchInput type="text" placeholder="검색..." />
    </SearchForm>
  );
};

export default SearchBar;
