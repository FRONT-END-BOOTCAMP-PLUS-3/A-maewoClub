"use client";

import { UserDto } from "@/application/users/dto/UserDto";
import { create } from "zustand";

interface AuthState {
  user: UserDto | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: UserDto) => void;
  logout: () => void;
  fetchUser: () => Promise<UserDto | null>; // UserDto 반환
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token:
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null,
  isAuthenticated: !!localStorage.getItem("access_token"),

  login: (token, user) => {
    localStorage.setItem("access_token", token);
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("access_token");
    set({ token: null, user: null, isAuthenticated: false });
  },

  fetchUser: async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      set({ user: null, isAuthenticated: false });
      return null; // 인증 토큰이 없을 경우 null 반환
    }

    try {
      const res = await fetch("/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("유저 정보를 불러올 수 없습니다.");
      }

      const { user } = await res.json();
      set({ user, isAuthenticated: true });
      return user; // 유저 정보를 반환
    } catch (error) {
      console.error("❌ 유저 정보 불러오기 실패:", error);
      set({ user: null, isAuthenticated: false });
      return null; // 오류가 나면 null 반환
    }
  },
}));
