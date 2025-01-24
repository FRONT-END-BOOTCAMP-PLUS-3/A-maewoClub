import React from "react";
import { SearchBarContainer, SearchInput, SearchIcon } from "./searchBar.style";

const SearchBar = () => {
  const searchIconSrc = "/search.svg"; // 이미지 경로

  return (
    <SearchBarContainer>
      <div style={{ position: "relative" }}>
        {/* 검색 아이콘 */}
        <SearchIcon
          src={searchIconSrc}
          alt="Search Icon"
          width={17}
          height={17}
        />

        {/* 검색 입력 필드 */}
        <SearchInput type="text" placeholder="검색..." />
      </div>
    </SearchBarContainer>
  );
};

export default SearchBar;
