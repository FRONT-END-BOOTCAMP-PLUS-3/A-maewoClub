"use client";
import React from "react";
import CardPostListItemTest from "@/components/board/main/cardPost/cardPost";
import FilterBar from "@/components/board/filterBar/filterBar";
import SearchBar from "@/components/board/searchBar/searchBar";
import Button from "@/components/board/button/button";

const Page = () => {
  return (
    <>
      <SearchBar />
      <FilterBar />
      <CardPostListItemTest />
      <div style={{ position: "fixed", right: "30px", bottom: "30px" }}>
        <Button>+ 글쓰기</Button>
      </div>
    </>
  );
};

export default Page;
