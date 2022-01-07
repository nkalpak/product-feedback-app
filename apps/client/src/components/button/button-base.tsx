import * as ThemeUi from 'theme-ui';
import React from 'react';

export interface IButtonBaseProps extends ThemeUi.ButtonProps {
  prependIcon?: React.ReactNode;
}

export function ButtonBase({ prependIcon, children, ...delegated }: IButtonBaseProps): JSX.Element {
  return (
    <ThemeUi.Button
      {...delegated}
      sx={{
        cursor: 'pointer',

        ...delegated.sx,

        fontFamily: 'body',
        px: 4,
        /*
         * Icon adds a bit of whitespace to the left
         * so when it's present, we micro-adjust the
         * padding so that it is the same as on the right.
         * */
        pl: prependIcon ? '16px' : 4,
        fontWeight: 700,
        fontSize: 'sm',
        textTransform: 'capitalize',
        borderRadius: '10px',
      }}
    >
      <ThemeUi.Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {prependIcon}
        {children}
      </ThemeUi.Flex>
    </ThemeUi.Button>
  );
}
