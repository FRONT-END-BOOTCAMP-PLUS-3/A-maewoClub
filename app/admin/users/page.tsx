"use client";

import Table from "@/components/index/admin/table/table";
import { User } from "@/domain/entities/User";
import { useEffect, useState } from "react";

const userColumns = [
  { key: "nickname", header: "닉네임" },
  { key: "level", header: "레벨" },
  { key: "role", header: "권한" },
  {
    key: "email",
    header: "이메일",
  },
  { key: "created_at", header: "가입 날짜" },
  { key: "public_status", header: "공개 상태" },
];

const AdminUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await fetch("/api/users", { method: "GET" });
        const data = await res.json();
        console.log(data);
        setUsers(data.user);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };
    fetchBoards();
  }, []);

  const handleDelete = (user: User) => {
    alert("삭제");
  };

  const handleView = (user: User) => {
    alert("정보 자세히 보기");
  };

  return (
    <div>
      <Table<User>
        category={"회원 관리"}
        columns={userColumns}
        data={users}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default AdminUsers;
