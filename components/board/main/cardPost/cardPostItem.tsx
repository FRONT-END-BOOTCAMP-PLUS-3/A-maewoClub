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
import useFindUserByUserId from "@/hook/useFindUserbyUserId";

const PostListItem = (post: BoardDto) => {
  const { userData, isLoading, error } = useFindUserByUserId(post.userId);
  const router = useRouter();

  const handleDetail = () => {
    router.push(`boards/${post.id}`);
  };

  return (
    <>
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
              <PostPhrase>{userData?.user.nickname}</PostPhrase>
            </PostContent>
            <PostText style={{ marginTop: "70px", marginBottom: "11px" }}>
              <span>👁️: {post.viewCount || 0}</span>
              <span>❤️: {post.likeCount} </span>
            </PostText>
          </div>
        </PostStyle>
      </Container>
    </>
  );
};

export default PostListItem;
