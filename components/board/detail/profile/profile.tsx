"use client";

import {
  Container,
  CreateDate,
  InfoWrapper,
  Nickname,
  ProfileImage,
} from "./profile.style";

interface ProfileProps {
  image: string;
  nickname: string;
  createdDate: string;
}

const mock: ProfileProps = {
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
