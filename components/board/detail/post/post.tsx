"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Comment from "../comment/comment";
import Profile from "../profile/profile";
import {
  Content,
  InfoWrapper,
  SubInfo,
  Title,
  PostContainer,
  ContentBox,
  Settings,
  FlexBox,
} from "./post.style";
import { BoardDetailDto } from "@/application/board/dto/BoardDetailDto";
import Image from "next/image";
import { useAuthStore } from "@/store/useAuthStore";

const Post = () => {
  const { id } = useParams();
  const [board, setBoard] = useState<BoardDetailDto>();
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const router = useRouter();

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
      })
      .catch((error) => {
        console.error("게시글 상세 정보 호출 오류:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!id) return;

    fetch(`/api/boards/detail?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("게시글 삭제에 실패했습니다");
        }
        return res.json();
      })
      .then(() => {
        alert("삭제가 완료됐습니다.");
        router.push(`/boards`);
      })
      .catch((error) => {
        console.error("게시글 상세 정보 호출 오류:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
        <FlexBox>
          <Profile
            nickname={profileData.nickname}
            image={profileData.image}
            createdAt={profileData.createdAt}
          />
          {user?.id == board.userId && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Settings> 수정 </Settings>
              <SubInfo> | </SubInfo>
              <Settings onClick={handleDelete}> 삭제 </Settings>
            </div>
          )}
        </FlexBox>
        <Title>{board.title}</Title>
        {board.images &&
          board.images.length > 0 &&
          board.images.map((image, index) => (
            <Image
              key={index}
              src={image.photoUrl}
              width={500}
              height={400}
              alt={`post_image_${index}`}
            />
          ))}

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
