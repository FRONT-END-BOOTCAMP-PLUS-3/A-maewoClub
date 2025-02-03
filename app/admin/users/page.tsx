"use client";

import Table from "@/components/index/admin/table/table";

interface User {
  id: number;
  nickname: string;
  level: number;
  role: string;
  email: string;
  created_at: string;
  updated_at: string;
  public_status: string;
}

const users: User[] = [
  {
    id: 1,
    nickname: "user1",
    level: 2,
    role: "user",
    email: "user1@example.com",
    created_at: "2024-02-01T12:00:00Z",
    updated_at: "2024-02-01T15:00:00Z",
    public_status: "inactive",
  },
  {
    id: 2,
    nickname: "user2",
    level: 3,
    role: "user",
    email: "user2@example.com",
    created_at: "2024-02-02T12:00:00Z",
    updated_at: "2024-02-02T15:00:00Z",
    public_status: "active",
  },
  {
    id: 3,
    nickname: "user3",
    level: 4,
    role: "admin",
    email: "user3@example.com",
    created_at: "2024-02-03T12:00:00Z",
    updated_at: "2024-02-03T15:00:00Z",
    public_status: "inactive",
  },
  {
    id: 4,
    nickname: "user4",
    level: 5,
    role: "user",
    email: "user4@example.com",
    created_at: "2024-02-04T12:00:00Z",
    updated_at: "2024-02-04T15:00:00Z",
    public_status: "active",
  },
  {
    id: 5,
    nickname: "user5",
    level: 1,
    role: "user",
    email: "user5@example.com",
    created_at: "2024-02-05T12:00:00Z",
    updated_at: "2024-02-05T15:00:00Z",
    public_status: "inactive",
  },
  {
    id: 6,
    nickname: "user6",
    level: 2,
    role: "admin",
    email: "user6@example.com",
    created_at: "2024-02-06T12:00:00Z",
    updated_at: "2024-02-06T15:00:00Z",
    public_status: "active",
  },
  {
    id: 7,
    nickname: "user7",
    level: 3,
    role: "user",
    email: "user7@example.com",
    created_at: "2024-02-07T12:00:00Z",
    updated_at: "2024-02-07T15:00:00Z",
    public_status: "inactive",
  },
  {
    id: 8,
    nickname: "user8",
    level: 4,
    role: "user",
    email: "user8@example.com",
    created_at: "2024-02-08T12:00:00Z",
    updated_at: "2024-02-08T15:00:00Z",
    public_status: "active",
  },
  {
    id: 9,
    nickname: "user9",
    level: 5,
    role: "admin",
    email: "user9@example.com",
    created_at: "2024-02-09T12:00:00Z",
    updated_at: "2024-02-09T15:00:00Z",
    public_status: "inactive",
  },
  {
    id: 10,
    nickname: "user10",
    level: 1,
    role: "user",
    email: "user10@example.com",
    created_at: "2024-02-10T12:00:00Z",
    updated_at: "2024-02-10T15:00:00Z",
    public_status: "active",
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