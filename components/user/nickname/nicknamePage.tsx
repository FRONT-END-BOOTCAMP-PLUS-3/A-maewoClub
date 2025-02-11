import {
  Command,
  Container,
  Button,
  Input,
  ButtonWrapper,
} from "./nicknamePage.style";

type NicknamePageProps = {
  nickname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const NicknamePage = ({ nickname, onChange, onSubmit }: NicknamePageProps) => {
  return (
    <Container>
      <Command>닉네임을 입력해주세요</Command>
      <form onSubmit={onSubmit}>
        <Input
          type='text'
          value={nickname}
          onChange={onChange}
          placeholder='닉네임을 입력하세요'
        />
        <ButtonWrapper>
          <Button type='submit'>입력</Button>
        </ButtonWrapper>
      </form>
    </Container>
  );
};

export default NicknamePage;
