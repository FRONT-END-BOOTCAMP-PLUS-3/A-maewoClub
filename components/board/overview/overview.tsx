"use client";

import React from "react";
import {
  SearchInput,
  SearchIcon,
  SearchForm,
} from "../searchBar/searchBar.style";
import TextForm from "../textForm/textForm";
import OverviewContainer from "./overview.style";

const Overview = () => {
  const SearchIconSvg = "/search.svg";
  return (
    <OverviewContainer>
      <TextForm />
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
    </OverviewContainer>
  );
};

export default Overview;
