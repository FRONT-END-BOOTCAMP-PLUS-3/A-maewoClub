import React from 'react';
import { ConfigProvider, Button, Space } from 'antd';
// import { useResponsive } from 'antd-style';

const FilterButton: React.FC = () => {
  // const { xxl } = useResponsive();

  // 반복되는 색상과 variant를 정리
  const colors = ['default', 'primary', 'danger', 'pink', 'purple', 'cyan'];
  const variants: Array<'default' | 'primary' | 'dashed' | 'text' | 'link'> = ['default', 'primary', 'dashed', 'text', 'link'];

  return (
    // <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {colors.map((color) => (
          <Space key={color} wrap>
            {variants.map((variant) => (
              <Button key={`${color}-${variant}`} style={{ backgroundColor: color }} type={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </Space>
        ))}
      </Space>
    // </ConfigProvider>
  );
};

export default FilterButton;