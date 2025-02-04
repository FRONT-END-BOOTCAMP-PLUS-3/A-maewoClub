"use client";
import React from "react";
import {
  PostContent,
  PostImage,
  PostPhrase,
  PostStyle,
  PostText,
  PostTitle,
} from "./cardPost.style";
// import { useRouter } from "next/navigation";

interface Post {
  image: string;
  title: string;
  content: string;
  nickname: string;
  id: number;
  comment: number;
  view: number;
  heart: number;
}

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  // const router = useRouter();

  // const handleDetail = () => {
  //   router.push(`boards/${post.id}`);
  // };

  return (
    <PostStyle
    // onClick={handleDetail}
    >
      <PostImage>
        <img src={post.image} alt={post.title} />
      </PostImage>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostPhrase>{post.content}</PostPhrase>
          <PostText>{post.nickname}</PostText>
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

export default PostListItem;
