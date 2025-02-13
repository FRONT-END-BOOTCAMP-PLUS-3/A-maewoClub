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
import useFindUserByUserId from "@/hook/useFindUserbyUserId";

const Post = () => {
  const { id } = useParams();
  const boardId = Array.isArray(id) ? id[0] : id;

  const [board, setBoard] = useState<BoardDetailDto | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!boardId) {
      return;
    }

    fetch(`/api/boards/detail?id=${boardId}`)
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
        console.error("❌ 게시글 상세 정보 호출 오류:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [boardId]);

  const userId = board?.userId ?? "";

  const { userData, isLoading, error } = useFindUserByUserId(userId);

  if (loading) return <div>로딩 중...</div>;
  if (!board) return <div>존재하지 않는 게시글입니다.</div>;

  if (isLoading) return <div>유저 정보 불러오는 중...</div>;
  if (error || !userData) return <div>유저 정보를 불러올 수 없습니다.</div>;

  const handleDelete = () => {
    if (!boardId) {
      return;
    }

    fetch(`/api/boards/detail?id=${boardId}`, {
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
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const profileData = {
    nickname: userData.user.nickname ?? "알 수 없음",
    image: userData.user.photoUrl ?? "/Dfprofile.png",
    createdAt: board.createdAt ?? new Date(),
  };

  return (
    <PostContainer>
      <ContentBox>
        <FlexBox>
          <Profile
            nickname={profileData.nickname}
            image={profileData.image}
            createdAt={board.createdAt}
          />
          {user?.id === board.userId && (
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
          <SubInfo>👁️ : {board.viewCount}</SubInfo>
          <SubInfo>❤️ : {board.likeCount}</SubInfo>
          <SubInfo>🗣️ : {board.comments.length}</SubInfo>
        </InfoWrapper>
        <Comment boardId={board.id} />
      </ContentBox>
    </PostContainer>
  );
};

export default Post;
