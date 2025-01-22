import styled from "styled-components";

export const StyledButton = styled.div`
  width: 132.87px;
  height: 55.219px;
  flex-shrink: 0;

  border-radius: 78px;
  background: var(--point_red, #E50913);

  /* 버튼 텍스트를 가운데 정렬하기 위해 flex 사용 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButtonText = styled.span`
  display: flex;
  width: 98.358px;
  height: 32.786px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #FFFFFF;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
