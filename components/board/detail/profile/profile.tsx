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
  createdAt: Date;
}

const Profile = ({
  nickname,
  image = "/Dfprofile.png",
  createdAt,
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
          {/* <CreateDate>{createdAt}</CreateDate> */}
        </InfoWrapper>
      </Container>
    </>
  );
};

export default Profile;
