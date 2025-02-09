"use client";

import { useState } from "react";
import {
  Category,
  Container,
  Input,
  InputBox,
  SubmitButton,
  ErrorMsg,
} from "./loginForm.style";
import { useLogin } from "@/hook/useLogin";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

interface AccountInputProps {
  onUpdate?: (content: string) => void;
}

const LoginForm = ({ onUpdate }: AccountInputProps) => {
  const [accountId, setAccountId] = useState<string>("");
  const [accountPw, setAccountPw] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutate: login } = useLogin();
  const { fetchUser } = useAuthStore();
  const router = useRouter();

  const handleId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountId(event.target.value);
  };

  const handlePw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountPw(event.target.value);
  };

  const handleSubmit = async () => {
    setErrorMessage("");

    if (!accountId || !accountPw) {
      setErrorMessage("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    login(
      { email: accountId, password: accountPw },
      {
        onSuccess: async () => {
          alert("로그인 성공!");
          await fetchUser();
          window.location.reload();
        },
        onError: (error) => {
          setErrorMessage(error.message);
        },
      }
    );
  };

  return (
    <Container>
      <InputBox>
        <Category>아이디</Category>
        <Input
          type='email'
          value={accountId}
          onChange={handleId}
          placeholder='이메일을 입력해주세요.'
        />
        <Category>비밀번호</Category>
        <Input
          type='password'
          value={accountPw}
          onChange={handlePw}
          placeholder='비밀번호를 입력해주세요'
        />
      </InputBox>
      {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}

      <SubmitButton onClick={handleSubmit}>로그인</SubmitButton>
    </Container>
  );
};

export default LoginForm;
