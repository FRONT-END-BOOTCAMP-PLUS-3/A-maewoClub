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

  const [nickname, setNickname] = useState("");

  const getProvider = (): ProviderType | null => {
    const provider = localStorage.getItem("provider");
    return provider === "google" || provider === "kakao" ? provider : null;
  };

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

      await fetch("/api/users/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname,
          provider,
          email: response.email,
        }),
      });

      router.push("/");
    } catch (error) {
      console.error("❌ OAuth 처리 중 오류 발생:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <NicknamePage
      nickname={nickname}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
