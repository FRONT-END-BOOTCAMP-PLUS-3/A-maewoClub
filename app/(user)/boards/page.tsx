"use client";

import React from "react";
import CardPostListItemTest from "@/components/board/main/cardPost/cardPost";
import FilterBar from "@/components/board/filterBar/filterBar";

const Page = () => {
  return (
    <>
      <FilterBar />
      <CardPostListItemTest />
    </>
  );
};

export default Page;