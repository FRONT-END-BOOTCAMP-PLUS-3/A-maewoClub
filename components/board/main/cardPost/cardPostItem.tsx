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
import { BoardDto } from "@/application/board/dto/BoardDto";
import { useRouter } from "next/navigation";

const PostListItem = (post: BoardDto) => {
  const router = useRouter();

  const handleDetail = () => {
    router.push(`boards/${post.id}`);
  };

  return (
    <PostStyle onClick={handleDetail}>
      <PostImage>{/* <img src={post.image} alt={post.title} /> */}</PostImage>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostPhrase>{post.description}</PostPhrase>
          <PostText>{post.userId}</PostText>
        </PostContent>
        <PostText style={{ marginTop: "52px", marginBottom: "11px" }}>
          {/* <span>댓글: {post.comment}</span> */}
          <span>조회수: {post.likeCount}</span>
          <span>하트: {post.viewCount} </span>
        </PostText>
      </div>
    </PostStyle>
  );
};

export default PostListItem;
