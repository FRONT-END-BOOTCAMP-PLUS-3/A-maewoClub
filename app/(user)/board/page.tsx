"use client";

import React from "react";
import CardPostListItemTest from "@/components/board/main/cardPost/cardPost";
import FilterBar from "@/components/board/filterBar/filterBar";
import SearchBar from "@/components/board/searchBar/searchBar";

const Page = () => {
  return (
    <>
      <SearchBar />
      <FilterBar />
      <CardPostListItemTest />
    </>
  );
};

export default Page;
