import { useState, useEffect } from "react";
import { UserDto } from "@/application/users/dto/UserDto";

const useFindUserByUserId = (id: string) => {
  const [userData, setUserData] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || id.trim() === "") {
      setIsLoading(false);
      setUserData(null);
      return;
    }

    setIsLoading(true);

    (async () => {
      try {
        const res = await fetch(`/api/users/account?id=${id}`);
        if (!res.ok) throw new Error("사용자 정보를 불러올 수 없습니다.");

        const data: UserDto = await res.json();

        await new Promise((resolve) => setTimeout(resolve, 300));
        setUserData(data);
        setError(null);
      } catch (error) {
        setError("사용자 정보를 가져오는 중 오류 발생");
        console.error("❌ 사용자 정보 호출 오류:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return { userData, isLoading, error };
};

export default useFindUserByUserId;
