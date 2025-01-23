import {
  Container,
  CreateDate,
  InfoWrapper,
  Nickname,
  ProfileImage,
} from "./profile.style";

interface Post {
  id: number;
  image: string;
  title: string;
  content: string;
  view: number;
  heart: number;
}

const mock = {
  image: "/file.svg",
  nickname: "빨간떡볶이1짱",
  createdDate: "2025/01/23",
};

const Profile = () => {
  return (
    <>
      <Container>
        <ProfileImage
          src={mock.image}
          alt='profile-image'
        />
        <InfoWrapper>
          <Nickname>{mock.nickname}</Nickname>
          <CreateDate>{mock.createdDate}</CreateDate>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default Profile;
