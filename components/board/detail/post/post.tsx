import Comment from "../comment/comment";
import Profile from "../profile/profile";
import {
  Content,
  InfoWrapper,
  SubInfo,
  Title,
  Image,
  PostContainer,
  ContentBox,
} from "./post.style";

interface PostProps {
  image: string;
  title: string;
  content: string;
  like: number;
  view: number;
  comment: number;
}

const mock: PostProps = {
  image: "/",
  title: "신당동 떡뽁이 안 매움",
  content:
    "이번에 신당동 떡볶이 혼자 뿌시고 왔습니다... 정말 맛있어서 까무러치는줄 알았습니다... 벌써 또 먹으러 가고 싶어서 미칠 것 같네요ㅋㅋ 바이럴 절대 아닙니다 혼자만 알기 아까운 맛집이니까 많이 팔아주세요~",
  like: 33,
  view: 84,
  comment: 4,
};

const Post = () => {
  return (
    <>
      <PostContainer
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ContentBox>
          <Profile />
          <Title>{mock.title}</Title>
          <Image>
            <img
              src={mock.image}
              alt='post_image'
            />
          </Image>
          <Content>{mock.content}</Content>
          <InfoWrapper>
            <SubInfo>조회 : {mock.view}</SubInfo>
            <SubInfo>하트 : {mock.like}</SubInfo>
            <SubInfo>댓글 : {mock.comment}</SubInfo>
          </InfoWrapper>
          <Comment />
        </ContentBox>
      </PostContainer>
    </>
  );
};

export default Post;
