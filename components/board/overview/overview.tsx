"use client";

import React from "react";
import TextForm from "../textForm/textForm";
import OverviewContainer from "./overview.style";
import SearchBar from "../searchBar/searchBar";

const Overview = () => {
  return (
    <OverviewContainer>
      <TextForm />
      <SearchBar />
    </OverviewContainer>
  );
};

export default Overview;
