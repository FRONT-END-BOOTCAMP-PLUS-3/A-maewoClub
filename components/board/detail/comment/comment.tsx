import { BoardCommentDto } from "@/application/board/dto/BoardCommentDto";
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

interface CommentProps {
  comments: BoardCommentDto[];
}

const Comment = ({ comments }: CommentProps) => {
  return (
    <>
      <CommentBox>
        {comments.map((e) => (
          <Container key={e.id}>
            <ProfileImage
              src={e.photoUrl}
              alt='profile-image'
            />
            <InfoWrapper>
              <Nickname>{e.nickname}</Nickname>
              {/* <CreateDate>{e.createdAt}</CreateDate> */}
            </InfoWrapper>
            <InfoWrapper>
              <Nickname>{e.nickname}</Nickname>
              <CreateDate>{new Date(e.createdAt).toLocaleString()}</CreateDate>
            </InfoWrapper>
            <Content>{e.content}</Content>
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
