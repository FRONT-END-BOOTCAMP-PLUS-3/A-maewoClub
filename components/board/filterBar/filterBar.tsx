"use client";
import React, { useState } from "react";
import { FilterBarContainer, FilterButton } from "./filterBar.style";

interface FilterBarProps {
  onSortChange: (sortType: string) => void;
}

const FilterBar = ({ onSortChange }: FilterBarProps) => {
  const [activeButton, setActiveButton] = useState<string>("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    onSortChange(buttonName);
  };

  return (
    <FilterBarContainer>
      <FilterButton
        $isActive={activeButton === "popular"}
        onClick={() => handleButtonClick("popular")}
      >
        인기순
      </FilterButton>
      <FilterButton
        $isActive={activeButton === "following"}
        onClick={() => handleButtonClick("following")}
      >
        팔로잉
      </FilterButton>
      <FilterButton
        $isActive={activeButton === "myFeed"}
        onClick={() => handleButtonClick("myFeed")}
      >
        My 피드
      </FilterButton>
    </FilterBarContainer>
  );
};

export default FilterBar;
