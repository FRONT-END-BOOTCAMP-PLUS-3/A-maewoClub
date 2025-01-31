"use client";
import React, { useState } from "react";
import { OptionButton } from "./optionButton.style";

interface OptionButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterToggleButton = ({
  label,
  isActive,
  onClick,
}: OptionButtonProps) => {
  return (
    <OptionButton isActive={isActive} onClick={onClick}>
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
      {["전체", "마라맛", "엽떡", "매운맛 1단계", "매운맛 2단계"].map(
        (label) => (
          <FilterToggleButton
            key={label}
            label={label}
            isActive={selected === label}
            onClick={() => handleButtonClick(label)}
          />
        )
      )}
    </div>
  );
};

export default FilterButtonGroup;
