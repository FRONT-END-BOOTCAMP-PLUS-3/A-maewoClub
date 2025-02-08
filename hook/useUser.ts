import { UserDto } from "@/application/users/dto/UserDto";
import { useQuery } from "@tanstack/react-query";

export async function fetchUser(): Promise<UserDto | null> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  if (!token) {
    console.warn("❌ 토큰이 없습니다. 로그아웃 처리 필요");
    return null;
  }

  const response = await fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data: UserDto = await response.json();

  if (!response.ok) {
    return null;
  }

  return data;
}

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}
