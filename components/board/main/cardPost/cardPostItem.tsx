"use client";
import React from "react";
import {
  Container,
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
    <Container>
      <PostStyle onClick={handleDetail}>
        <PostImage>
          <img
            src={post.img}
            alt={post.title}
          />
        </PostImage>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostPhrase>{post.description}</PostPhrase>
            <PostText>{post.userId}</PostText>
          </PostContent>
          <PostText style={{ marginTop: "52px", marginBottom: "11px" }}>
            <span>조회수: {post.viewCount}</span>
            <span>하트: {post.likeCount} </span>
          </PostText>
        </div>
      </PostStyle>
    </Container>
  );
};

export default PostListItem;
