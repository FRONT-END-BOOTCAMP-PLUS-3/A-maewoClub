"use client";
import React, { useState, useEffect } from "react";
import { OptionButton } from "./optionButton.style";
import { BoardTag } from "@/domain/entities/BoardTag";
// import { BoardTagDto } from "@/application/board/dto/BoardTagDto";

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
        console.log("태그 데이터:", data);
        setTagData(data);
      } catch (error) {
        console.error("태그 데이터 가져오기 실패:", error);
      }
    };
    fetchTags();
  }, []);

  const handleButtonClick = (id: number) => {
    setSelected(id);
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
