"use client";
import React from "react";
import CardPostListItemTest from "@/components/board/main/cardPost/cardPost";
import FilterBar from "@/components/board/filterBar/filterBar";
import SearchBar from "@/components/board/searchBar/searchBar";
import Button from "@/components/board/button/button";
import { useRouter } from "next/navigation";
import FilterButtonGroup from "@/components/board/optionButton/optionButton";

const Page = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/boards/create");
  };

  return (
    <>
      <SearchBar />
      <FilterBar />

      <div style={{ display: "flex", gap: "15px" }}>
        <FilterButtonGroup />
      </div>

      <CardPostListItemTest />

      <div
        style={{ position: "fixed", right: "30px", bottom: "30px" }}
        onClick={handleCreate}
      >
        <Button>+ 글쓰기</Button>
      </div>
    </>
  );
};

export default Page;
