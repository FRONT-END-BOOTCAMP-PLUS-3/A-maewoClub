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

const Profile = ({
  nickname,
  image = "/Dfprofile.png",
  createdDate,
}: ProfileProps) => {
  return (
    <>
      <Container>
        <ProfileImage
          src={image}
          alt='profile-image'
        />
        <InfoWrapper>
          <Nickname>{nickname}</Nickname>
          <CreateDate>{createdDate}</CreateDate>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default Profile;
