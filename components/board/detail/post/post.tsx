"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Comment from "../comment/comment";
import Profile from "../profile/profile";
import {
  Content,
  InfoWrapper,
  SubInfo,
  Title,
  PostContainer,
  ContentBox,
  PostImage,
} from "./post.style";
import { BoardDetailDto } from "@/application/board/dto/BoardDetailDto";

const Post = () => {
  const { id } = useParams();
  const [board, setBoard] = useState<BoardDetailDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/boards/detail?id=${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("게시글 상세 정보를 불러오는데 실패했습니다.");
        }
        return res.json();
      })
      .then((data: BoardDetailDto) => {
        setBoard(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("게시글 상세 정보 호출 오류:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>로딩중...</div>;
  if (!board) return <div>존재하지 않는 게시글입니다.</div>;

  const profileData = {
    nickname: board.userId,
    image: "/Dfprofile.png",
    createdAt: new Date(board.createdAt),
  };

  return (
    <PostContainer>
      <ContentBox>
        <Profile
          nickname={profileData.nickname}
          image={profileData.image}
          createdAt={profileData.createdAt}
        />
        <Title>{board.title}</Title>
        {board.images && board.images.length > 0 && (
          <PostImage
            src={board.images[0].photoUrl}
            width={500}
            height={300}
            alt="post_image"
          />
        )}
        <Content>{board.description}</Content>
        <InfoWrapper>
          <SubInfo>조회 : {board.viewCount}</SubInfo>
          <SubInfo>하트 : {board.likeCount}</SubInfo>
          {/* <SubInfo>댓글 : {board.comments.length}</SubInfo> */}
        </InfoWrapper>
        <Comment boardId={board.id} />
      </ContentBox>
    </PostContainer>
  );
};

export default Post;
