"use client";

import Table from "@/components/index/admin/table/table";
import { Board } from "@/domain/entities/Board";
import { useEffect, useState } from "react";

const userColumns = [
  { key: "nickname", header: "닉네임" },
  { key: "title", header: "제목" },
  { key: "tagId", header: "태그" },
  { key: "createdAt", header: "등록 날짜" },
  { key: "likeCount", header: "좋아요" },
];

const AdminUsers = () => {
  const [boardsData, setBoardsData] = useState<Board[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await fetch("/api/boards", { method: "GET" });
        const data = await res.json();
        setBoardsData(data.boards);
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
      <Table<Board>
        category={"게시글 관리"}
        columns={userColumns}
        data={boardsData}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default AdminUsers;
