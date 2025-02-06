"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { exchangeCodeForToken } from "@/components/user/login/exchangeCodeforToken";

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

  const handleSubmit = async (event: React.FormEvent) => {
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

      await fetch("/api/users", {
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

  // useEffect(() => {
  //   if (code) {
  //     handleSubmit(new Event("submit") as unknown as React.FormEvent);
  //   }
  // }, [code]);

  // 추후 수정 예정
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1>닉네임을 입력해주세요</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder='닉네임을 입력하세요'
        />
        <button type='submit'>입력</button>
      </form>
    </div>
  );
}
