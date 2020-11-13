import React from 'react';

// @ts-ignore
import { ThemeEnum } from 'enums/themes';

import cn from 'classnames';
import styles from './Button.module.scss';

const ButtonDefaultProps = {
  width: 230,
  size: 'medium',
};

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  width?: number | string
  theme?: string
  size?: string
}

const getButtonSize = (size: string) => {
  const defaultSize = { fontSize: '20px', lineHeight: '24px' };

  if (size === 'small') {
    return { fontSize: '16px', lineHeight: '20px' };
  }
  if (size === 'medium') {
    return { fontSize: '20px', lineHeight: '24px' };
  }
  if (size === 'large') {
    return { fontSize: '23px', lineHeight: '27px' };
  } else {
    return defaultSize;
  }
};

const Button: React.FC<ButtonProps> = ({
                                         children,
                                         onClick,
                                         width = 230,
                                         theme = ThemeEnum.$green,
                                         size = 'medium',
                                       }) => {
  return (
    <button
      type='button'
      style={{
        width,
        backgroundColor: `${theme}`,
        fontSize: getButtonSize(size).fontSize,
        lineHeight: getButtonSize(size).lineHeight,
      }}
      className={cn(styles.root)}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
