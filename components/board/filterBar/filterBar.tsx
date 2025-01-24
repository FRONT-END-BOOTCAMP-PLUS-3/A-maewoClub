import React, { useState } from "react";
import { FilterBarContainer, FilterButton } from "./filterBar.style";

// 컴포넌트 정의
const FilterBar = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  // 버튼 클릭 이벤트 핸들러
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName); // 클릭한 버튼을 활성화 상태로 설정
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
