"use client";

import Image from "next/image";
import {
  Container,
  CreateDate,
  InfoWrapper,
  Nickname,
  ProfileImage,
} from "./profile.style";

export interface ProfileProps {
  image: string;
  nickname: string;
  createdAt: Date | string;
}

function Profile({ nickname, image, createdAt }: ProfileProps) {
  const formattedDate = new Date(createdAt)
    .toLocaleDateString("ko-KR")
    .replace(/\. /g, "/")
    .replace(/\.$/, "");

  return (
    <>
      <Container>
        <ProfileImage>
          <Image
            src={image}
            alt='profile image'
            width={60}
            height={60}
          />
        </ProfileImage>

        <InfoWrapper>
          <Nickname>{nickname}</Nickname>
          <CreateDate>{formattedDate}</CreateDate>
        </InfoWrapper>
      </Container>
    </>
  );
}

export default Profile;
