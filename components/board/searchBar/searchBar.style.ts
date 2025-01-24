import styled from "styled-components";
import Image from "next/image";

const SearchBarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
`;

const SearchForm = styled.div`
  position: absolute;
  width: 215px;
  top: 16px;
  right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--mainRed); /* 밑줄 스타일 */
  background: transparent; /* 배경 투명 */
  color: #333;
  font-size: 14px;
  padding-right: 30px; /* 오른쪽 여백 확보 */
  outline: none; /* 포커스 시 기본 효과 제거 */

  &::placeholder {
    color: rgba(0, 0, 0, 0.6); /* 플레이스홀더 색상 */
  }
`;

const SearchIcon = styled(Image)`
  position: absolute;
  right: 0; /* 입력창의 오른쪽 끝에 배치 */
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export { SearchBarContainer, SearchForm, SearchInput, SearchIcon };
