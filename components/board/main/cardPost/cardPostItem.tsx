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
import Image from "next/image";

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
            <Image
              src={post.img}
              alt={post.title}
              width={176}
              height={155}
            />
          </PostImage>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 20px",
            }}
          >
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostPhrase>{userData?.user.nickname}</PostPhrase>
            </PostContent>
            <PostText style={{ marginTop: "40px" }}>
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
