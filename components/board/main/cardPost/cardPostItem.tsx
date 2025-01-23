import React from "react";
import {
  PostContent,
  PostImage,
  PostPhrase,
  PostStyle,
  PostText,
  PostTitle,
} from "./cardPost.style";

interface Post {
  image: string;
  title: string;
  content: string;
  id: string;
  comment: number;
  view: number;
  heart: number;
}

interface PostListItemProps {
  post: Post;
}

const mock: Post = {
  image:
    "https://blog.kakaocdn.net/dn/93m8M/btsEEGoFOG2/eKqSbvDh3anRKecus98YRk/img.jpg",
  title: "뜩뻑이 믁어염",
  content:
    "매운맛이 아니라 고통의 맛을 판매하는 거라면 성공적! 하지만 나의 평화로운 식사.",
  id: "빨떡1짱",
  comment: 33,
  view: 33,
  heart: 33,
};

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  return (
    <PostStyle>
      <PostImage>
        <img src={post.image} alt={post.title} />
      </PostImage>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostPhrase>{post.content}</PostPhrase>
          <PostText>{post.id}</PostText>
        </PostContent>
        <PostText style={{ marginTop: "52px", marginBottom: "11px" }}>
          <span>댓글: {post.comment}</span>
          <span>조회수: {post.view}</span>
          <span>하트: {post.heart} </span>
        </PostText>
      </div>
    </PostStyle>
  );
};

const CardPostListItemTest = () => {
  return <PostListItem post={mock} />;
};

export default CardPostListItemTest;
