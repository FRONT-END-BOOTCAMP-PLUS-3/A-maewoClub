import styled from 'styled-components';
import { Button } from 'antd';

interface StyledButtonProps {
  color: 'default' | 'primary' | 'danger' | 'pink' | 'purple' | 'cyan';
  variant: 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link';
}

const getColor = (color: string) => {
  switch (color) {
    case 'primary':
      return '#1890ff'; // 기본 primary 색상
    case 'danger':
      return '#ff4d4f'; // danger 색상
    case 'pink':
      return '#eb2f96'; // pink 색상
    case 'purple':
      return '#722ed1'; // purple 색상
    case 'cyan':
      return '#13c2c2'; // cyan 색상
    default:
      return '#d9d9d9'; // default 색상 (회색)
  }
};

// 스타일 정의
export const StyledButton = styled(Button)<StyledButtonProps>`
  /* 공통 스타일 */
  font-size: 14px;
  border-radius: 4px;

  /* variant에 따른 스타일링 */
  ${({ variant, color }) => {
    const buttonColor = getColor(color);
    switch (variant) {
      case 'solid':
        return `
          background-color: ${buttonColor};
          border: none;
          color: white;

          &:hover {
            background-color: ${buttonColor + 'CC'}; /* 더 연한 색상 */
          }
        `;
      case 'outlined':
        return `
          background-color: transparent;
          border: 1px solid ${buttonColor};
          color: ${buttonColor};

          &:hover {
            background-color: ${buttonColor + '1A'}; /* 연한 투명 배경 */
          }
        `;
      case 'dashed':
        return `
          background-color: transparent;
          border: 1px dashed ${buttonColor};
          color: ${buttonColor};

          &:hover {
            background-color: ${buttonColor + '1A'};
          }
        `;
      case 'filled':
        return `
          background-color: ${buttonColor};
          border: 1px solid ${buttonColor};
          color: white;

          &:hover {
            background-color: ${buttonColor + 'CC'};
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          border: none;
          color: ${buttonColor};

          &:hover {
            text-decoration: underline;
          }
        `;
      case 'link':
        return `
          background-color: transparent;
          border: none;
          color: ${buttonColor};
          text-decoration: underline;

          &:hover {
            color: ${buttonColor + 'CC'};
          }
        `;
      default:
        return `
          background-color: #d9d9d9;
          border: none;
          color: white;
        `;
    }
  }}
`;

