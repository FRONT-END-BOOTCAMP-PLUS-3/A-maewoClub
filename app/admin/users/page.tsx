"use client";

import Table from "@/components/index/admin/table/table";
import { User } from "@/domain/entities/User";

const users: User[] = [
  {
    id: "temp_id",
    nickname: "user1",
    level: 2,
    role: "user",
    email: "user1@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user2",
    level: 3,
    role: "user",
    email: "user2@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user3",
    level: 4,
    role: "admin",
    email: "user3@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user4",
    level: 5,
    role: "user",
    email: "user4@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user5",
    level: 1,
    role: "user",
    email: "user5@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user6",
    level: 2,
    role: "admin",
    email: "user6@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user7",
    level: 3,
    role: "user",
    email: "user7@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user8",
    level: 4,
    role: "user",
    email: "user8@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user9",
    level: 5,
    role: "admin",
    email: "user9@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
  {
    id: "temp_id",

    nickname: "user10",
    level: 1,
    role: "user",
    email: "user10@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    publicStatus: true,
  },
];

const userColumns = [
  { key: "id", header: "ID" },
  { key: "nickname", header: "닉네임" },
  { key: "level", header: "레벨" },
  { key: "role", header: "권한" },
  {
    key: "email",
    header: "이메일",
  },
  { key: "created_at", header: "가입 날짜" },
  { key: "updated_at", header: "최근 접속 날짜" },
  { key: "public_status", header: "공개 상태" },
];

const AdminUsers = () => {
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
