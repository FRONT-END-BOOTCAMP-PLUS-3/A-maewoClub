import Profile from "../profile/profile";
import { Container, Content } from "./comment.style";

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
      {mock.map(({ nickname, createdDate, image, comment }, index) => (
        <Container key={index}>
          <Profile
            nickname={nickname}
            createdDate={createdDate}
            image={image}
          />
          <Content>{comment}</Content>
        </Container>
      ))}
    </>
  );
};

export default Comment;
