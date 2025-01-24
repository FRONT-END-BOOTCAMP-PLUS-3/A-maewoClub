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
  border-bottom: 1px solid var(--mainRed);
  background: transparent;
  color: #333;
  font-size: 14px;
  padding-right: 30px;
  outline: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const SearchIcon = styled(Image)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export { SearchBarContainer, SearchForm, SearchInput, SearchIcon };
