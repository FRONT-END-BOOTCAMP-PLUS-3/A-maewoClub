"use client";
import React, { useState, useEffect } from "react";
import { OptionButton } from "./optionButton.style";
import { BoardTag } from "@/domain/entities/BoardTag";

interface OptionButtonProps {
  label: string;
  $isActive: boolean;
  onClick: () => void;
}

interface FilterButtonGroupProps {
  onFilterChange: (tagId: number | null) => void;
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

const FilterButtonGroup = ({ onFilterChange }: FilterButtonGroupProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [tagData, setTagData] = useState<BoardTag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch("/api/board-tags", {
          method: "GET",
        });
        if (!res.ok) {
          throw new Error(`서버 응답 실패: ${res.status}`);
        }
        const data = await res.json();
        setTagData(data);
      } catch (error) {
        console.error("태그 데이터 가져오기 실패:", error);
      }
    };
    fetchTags();
  }, []);

  const handleButtonClick = (id: number) => {
    // 같은 태그를 다시 클릭하면 필터 해제
    const newSelected = selected === id ? null : id;
    setSelected(newSelected);
    onFilterChange(newSelected);
  };

  return (
    <div style={{ display: "flex", gap: "8px", overflowX: "auto" }}>
      {tagData?.map((tag) => (
        <FilterToggleButton
          key={tag.id}
          label={tag.content}
          $isActive={selected === tag.id}
          onClick={() => handleButtonClick(tag.id)}
        />
      ))}
    </div>
  );
};

export default FilterButtonGroup;
