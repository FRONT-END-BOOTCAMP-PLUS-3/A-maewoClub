import { UserDto } from "@/application/users/dto/UserDto";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserDto> {
  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data: { token: string; user: UserDto; error?: string } =
    await response.json();

  if (!response.ok) {
    throw new Error(data.error || "로그인 실패");
  }

  localStorage.setItem("access_token", data.token);
  return data.user;
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
    },
    onError: (error) => {
      console.error(
        "❌ 로그인 실패:",
        error instanceof Error ? error.message : "알 수 없는 오류"
      );
    },
  });
}
