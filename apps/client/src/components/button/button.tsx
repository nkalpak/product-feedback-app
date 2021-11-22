import React from 'react';
import { ButtonBase, IButtonBaseProps } from '@/components/button/button-base';

type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'danger';

interface IButtonProps extends IButtonBaseProps {
  color?: ButtonColor;
  prependIcon?: React.ReactNode;
}

const BUTTON_BACKGROUND: Record<ButtonColor, string> = {
  danger: 'danger',
  secondary: 'secondary',
  primary: 'primary',
  tertiary: 'darkgrey.medium',
};

export function Button({
  color = 'primary',
  prependIcon,
  ...delegated
}: IButtonProps): JSX.Element {
  return (
    <ButtonBase
      {...delegated}
      prependIcon={prependIcon}
      sx={{
        ...delegated.sx,

        '&:hover': {
          opacity: 0.8,
        },
        color: 'bluegrey',
        backgroundColor: BUTTON_BACKGROUND[color],
      }}
    />
  );
}
