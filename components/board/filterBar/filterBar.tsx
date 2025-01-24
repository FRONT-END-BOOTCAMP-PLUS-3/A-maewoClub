"use client";
import React, { useState } from "react";
import { FilterBarContainer, FilterButton } from "./filterBar.style";
const FilterBar = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <FilterBarContainer>
      <FilterButton
        isActive={activeButton === "button1"}
        onClick={() => handleButtonClick("button1")}
      >
        인기순
      </FilterButton>
      <FilterButton
        isActive={activeButton === "button2"}
        onClick={() => handleButtonClick("button2")}
      >
        팔로잉
      </FilterButton>
      <FilterButton
        isActive={activeButton === "button3"}
        onClick={() => handleButtonClick("button3")}
      >
        My 피드
      </FilterButton>
    </FilterBarContainer>
  );
};

export default FilterBar;
