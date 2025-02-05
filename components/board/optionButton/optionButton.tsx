"use client";
import React, { useState } from "react";
import { OptionButton } from "./optionButton.style";

interface OptionButtonProps {
  label: string;
  $isActive: boolean;
  onClick: () => void;
}

const FilterToggleButton = ({
  label,
  $isActive,
  onClick,
}: OptionButtonProps) => {
  return (
    <OptionButton $isActive={$isActive} onClick={onClick}>
      {label}
    </OptionButton>
  );
};

const FilterButtonGroup = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleButtonClick = (label: string) => {
    setSelected(label);
  };

  return (
    <div style={{ display: "flex", gap: "8px", overflowX: "auto" }}>
      {[
        "맛집 추천",
        "일상",
        "반려동물",
        "생활정보",
        "번개",
        "취미생활",
        "기타",
      ].map((label) => (
        <FilterToggleButton
          key={label}
          label={label}
          $isActive={selected === label}
          onClick={() => handleButtonClick(label)}
        />
      ))}
    </div>
  );
};

export default FilterButtonGroup;
