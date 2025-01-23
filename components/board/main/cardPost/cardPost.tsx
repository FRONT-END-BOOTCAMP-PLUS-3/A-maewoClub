import React from "react";
import PostListItem from "./cardPostItem"; // PostListItem 컴포넌트 임포트

interface Post {
  image: string; // 이미지 URL
  title: string; // 제목
  content: string; // 내용
  id: string; // 아이디
  comment: number; // 댓글 수
  view: number; // 조회수
  heart: number; // 좋아요 수
}

interface CardPostProps {
  posts: Post[]; // 여러 게시글을 배열로 받습니다.
}

const CardPost: React.FC<CardPostProps> = ({ posts }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {posts.map((post) => (
        <PostListItem key={post.id}/>
      ))}
    </div>
  );
};

// 더미 데이터 예시 (여러 게시글로 확장)
const mockPosts: Post[] = [
  {
    image: "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "첫 번째 게시물",
    content: "매운맛이 아니라 고통의 맛을 판매하는 거라면 성공적! 하지만 나의 평화로운 식사.",
    id: "빨떡1짱",
    comment: 33,
    view: 120,
    heart: 45,
  },
  {
    image: "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "두 번째 게시물",
    content: "이것은 두 번째 게시물 내용입니다.",
    id: "찐빵이1짱",
    comment: 50,
    view: 200,
    heart: 60,
  },
  {
    image: "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
    title: "세 번째 게시물",
    content: "이것은 세 번째 게시물 내용입니다.",
    id: "탕수육1짱",
    comment: 15,
    view: 85,
    heart: 30,
  },
];

// 테스트용으로 CardPost를 렌더링
const CardPostTest = () => {
  return <CardPost posts={mockPosts} />;
};

export default CardPostTest;
