import styled from "styled-components";
import Image from "next/image";

// 검색바 컨테이너 스타일
const SearchBarContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0);
  flex-direction: column;
  align-items: flex-end;
  z-index: 500; /* 헤더보다 낮은 z-index로 설정 */
`;

// 검색 입력 필드 스타일
const SearchInput = styled.input`
  width: 215px;
  height: 40px; /* 적절한 높이로 수정 */
  padding-left: 30px; /* 아이콘과의 여백 */
  flex-shrink: 0;
  border: 1px solid var(--mainRed);
  border-radius: 4px;
  font-size: 14px;
  color: #333;

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

// 검색 아이콘 스타일
const SearchIcon = styled(Image)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export { SearchBarContainer, SearchInput, SearchIcon };
