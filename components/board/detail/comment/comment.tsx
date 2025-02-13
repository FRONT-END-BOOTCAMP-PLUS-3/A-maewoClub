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
  DeleteButton,
} from "./comment.style";
import { useAuthStore } from "@/store/useAuthStore";

interface CommentProps {
  boardId: number;
}

const Comment = ({ boardId }: CommentProps) => {
  const [comments, setComments] = useState<BoardCommentDto[]>([]);
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthStore();

  if (!user) return <div>유저 정보를 불러올 수 없습니다.</div>;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/board-comments?boardId=${boardId}`);
        const data: BoardCommentListDto = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error("❌ 댓글을 불러오는 데 실패했습니다:", error);
      }
    };

    fetchComments();
  }, [boardId]);

  console.log(comments);
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

  const handleDeleteComment = async (id: number) => {
    if (!user) {
      alert("⚠️ 로그인이 필요합니다!");
      return;
    }

    const confirmDelete = window.confirm("이 댓글을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/board-comments?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error();
      }
      console.log("댓글 삭제 성공");
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error("❌ 댓글 삭제 오류:", error);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  const formattedDate = (date: Date) =>
    new Date()
      .toLocaleDateString("ko-KR")
      .replace(/\. /g, "/")
      .replace(/\.$/, "");

  return (
    <>
      <CommentBox>
        {comments.map((e) => (
          <Container key={e.id}>
            <InfoWrapper>
              <Nickname>{e.nickname || "익명"}</Nickname>
              <CreateDate>{formattedDate(e.createdAt)}</CreateDate>
            </InfoWrapper>
            <Content>{e.content}</Content>
            {user.id === e.userId && (
              <DeleteButton onClick={() => handleDeleteComment(e.id)}>
                삭제
              </DeleteButton>
            )}
          </Container>
        ))}
      </CommentBox>

      <CommentInput
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder='댓글을 입력하세요...'
      />

      <ButtonBox>
        <Button onClick={handleCreateComment}>등록</Button>
      </ButtonBox>
    </>
  );
};

export default Comment;
