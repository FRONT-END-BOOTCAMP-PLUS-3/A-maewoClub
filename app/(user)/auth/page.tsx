"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { exchangeCodeForToken } from "@/components/user/login/exchangeCodeforToken";
import NicknamePage from "@/components/user/nickname/nicknamePage";

type ProviderType = "google" | "kakao";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  // 부모에서 닉네임 상태를 관리
  const [nickname, setNickname] = useState("");

  // provider 정보 가져오기
  const getProvider = (): ProviderType | null => {
    const provider = localStorage.getItem("provider");
    return provider === "google" || provider === "kakao" ? provider : null;
  };

  // 폼 제출 핸들러
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const provider = getProvider();
    if (!code || !provider) {
      console.error("❌ Authorization code 또는 provider 정보 없음");
      return;
    }

    try {
      const response = await exchangeCodeForToken(code, provider);
      if (!response) {
        console.error("❌ Access Token을 가져오는 데 실패함");
        return;
      }

      localStorage.setItem("access_token", response.accessToken);

      // 백엔드에 닉네임 등 정보 전송
      await fetch("/api/users/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname, // 부모에서 관리하는 닉네임 값
          provider,
          email: response.email,
        }),
      });

      router.push("/");
    } catch (error) {
      console.error("❌ OAuth 처리 중 오류 발생:", error);
    }
  };

  // input 변화 핸들러: 자식에서 onChange 이벤트 발생 시 호출
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <NicknamePage
      nickname={nickname} // 현재 닉네임 상태 전달
      onSubmit={handleSubmit} // 폼 제출 시 실행할 함수 전달
      onChange={handleChange} // input 변화 시 실행할 함수 전달
    />
  );
}
