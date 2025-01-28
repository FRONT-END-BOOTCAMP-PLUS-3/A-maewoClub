"use client";
import React from "react";
import PostListItem from "./cardPostItem";

interface Post {
  image: string;
  title: string;
  content: string;
  id: string;
  comment: number;
  view: number;
  heart: number;
}

interface CardPostProps {
  posts: Post[];
}

const CardPost = ({ posts }: CardPostProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {posts.map((post) => (
        <PostListItem key={post.id} />
      ))}
    </div>
  );
};

const mockPosts: Post[] = [
  {
    image:
      "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "첫 번째 게시물",
    content:
      "매운맛이 아니라 고통의 맛을 판매하는 거라면 성공적! 하지만 나의 평화로운 식사.",
    id: "빨떡1짱",
    comment: 33,
    view: 120,
    heart: 45,
  },
  {
    image:
      "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "두 번째 게시물",
    content: "이것은 두 번째 게시물 내용입니다.",
    id: "찐빵이1짱",
    comment: 50,
    view: 200,
    heart: 60,
  },
  {
    image:
      "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "세 번째 게시물",
    content: "이것은 세 번째 게시물 내용입니다.",
    id: "탕수육1짱",
    comment: 15,
    view: 85,
    heart: 30,
  },
  {
    image:
      "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "세 번째 게시물",
    content: "이것은 세 번째 게시물 내용입니다.",
    id: "탕수육1짱",
    comment: 15,
    view: 85,
    heart: 30,
  },
  {
    image:
      "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "세 번째 게시물",
    content: "이것은 세 번째 게시물 내용입니다.",
    id: "탕수육1짱",
    comment: 15,
    view: 85,
    heart: 30,
  },
  {
    image:
      "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "세 번째 게시물",
    content: "이것은 세 번째 게시물 내용입니다.",
    id: "탕수육1짱",
    comment: 15,
    view: 85,
    heart: 30,
  },
];

const CardPostTest = () => {
  return <CardPost posts={mockPosts} />;
};

export default CardPostTest;
