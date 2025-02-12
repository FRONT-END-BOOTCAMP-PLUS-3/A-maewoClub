"use client";

import { useEffect, useState } from "react";
import {
  BoardCommentDto,
  CreateBoardCommentDto,
  BoardCommentListDto,
} from "@/application/board/dto/BoardCommentDto";
import Button from "../../button/button";
import {
  ButtonBox,
  CommentBox,
  CommentInput,
  Container,
  Content,
  CreateDate,
  InfoWrapper,
  Nickname,
  ProfileImage,
} from "./comment.style";
import { useAuthStore } from "@/store/useAuthStore";

interface CommentProps {
  boardId: number;
}

const Comment = ({ boardId }: CommentProps) => {
  const [comments, setComments] = useState<BoardCommentDto[]>([]);
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthStore();

  // ✅ 클라이언트에서 userId 가져오기 (SSR 방지)
  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/board-comments?boardId=${boardId}`);
        const data: BoardCommentListDto = await response.json();
        console.log("💬 불러온 댓글 데이터:", data);
        setComments(data.comments);
      } catch (error) {
        console.error("❌ 댓글을 불러오는 데 실패했습니다:", error);
      }
    };

    fetchComments();
  }, [boardId]);

  const handleCreateComment = async () => {
    if (!newComment.trim()) {
      alert("⚠️ 댓글을 입력해주세요!");
      return;
    }

    if (!user) {
      alert("⚠️ 로그인이 필요합니다!");
      return;
    }

    const newCommentData: CreateBoardCommentDto = {
      boardId,
      userId: user.id,
      content: newComment,
    };

    try {
      const response = await fetch(`/api/board-comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommentData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`❌ 댓글 등록에 실패했습니다: ${errorMessage}`);
      }

      const data: BoardCommentDto = await response.json();

      setComments([data, ...comments]);
      setNewComment("");
    } catch (error) {
      console.error("❌ 댓글 등록 오류:", error);
    }
  };

  return (
    <>
      <CommentBox>
        {comments.map((e) => (
          <Container key={e.id}>
            <ProfileImage
              src={e.photoUrl || "/default-avatar.png"}
              alt="profile-image"
            />
            <InfoWrapper>
              <Nickname>{e.nickname || "익명"}</Nickname>
              <CreateDate>{new Date(e.createdAt).toLocaleString()}</CreateDate>
            </InfoWrapper>
            <Content>{e.content}</Content>
          </Container>
        ))}
      </CommentBox>

      <CommentInput
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="댓글을 입력하세요..."
      />

      <ButtonBox>
        <Button onClick={handleCreateComment}>등록</Button>
      </ButtonBox>
    </>
  );
};

export default Comment;
