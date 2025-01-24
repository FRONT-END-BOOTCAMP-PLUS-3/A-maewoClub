"use client"
import Button from "../../button/button";
import Profile from "../profile/profile";
import {
  ButtonBox,
  CommentBox,
  CommentInput,
  Container,
  Content,
} from "./comment.style";

interface CommentProps {
  nickname: string;
  createdDate: string;
  image: string;
  comment: string;
}

const mock: CommentProps[] = [
  {
    nickname: "1번닉네임",
    createdDate: "2025/01/23",
    image: "/file.svg",
    comment: "1번 댓글 내용~ 대충 너무 맛있다는 뜻~",
  },
  {
    nickname: "2번닉네임",
    createdDate: "2025/01/23",
    image: "/file.svg",
    comment: "2번 댓글 내용~ 대충 너무 맛있다는 뜻~",
  },
  {
    nickname: "3번닉네임",
    createdDate: "2025/01/23",
    image: "/file.svg",
    comment: "3번 댓글 내용~ 대충 너무 맛있다는 뜻~",
  },
];

const Comment = () => {
  return (
    <>
      <CommentBox>
        {mock.map((e) => (
          <Container key={e.nickname}>
            <Profile />
            <Content>{e.comment}</Content>
          </Container>
        ))}
      </CommentBox>
      <CommentInput />

      <ButtonBox>
        <Button>등록</Button>
      </ButtonBox>
    </>
  );
};

export default Comment;
