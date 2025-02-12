"use client";

import Table from "@/components/index/admin/table/table";
import { Recipe } from "@/domain/entities/Recipe";
import { useEffect, useState } from "react";

const userColumns = [
  { key: "nickname", header: "닉네임" },
  { key: "title", header: "제목" },
  { key: "description", header: "설명" },
  { key: "createdAt", header: "등록 날짜" },
  { key: "likeCount", header: "좋아요" },
];

const AdminUsers = () => {
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await fetch("/api/recipes", { method: "GET" });
        const data = await res.json();
        setRecipesData(data);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };
    fetchBoards();
  }, []);

  const handleDelete = () => {
    alert("삭제");
  };

  const handleView = () => {
    alert("정보 자세히 보기");
  };

  return (
    <div>
      <Table<Recipe>
        category={"레시피 관리"}
        columns={userColumns}
        data={recipesData}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default AdminUsers;
