/** @jsxImportSource theme-ui */
import * as ThemeUi from 'theme-ui';
import * as RadixToggle from '@radix-ui/react-toggle';
import React from 'react';

interface IToggleProps extends RadixToggle.ToggleProps {
  prependIcon?: React.ReactNode;
}

export function Toggle({ prependIcon, children, ...delegated }: IToggleProps): JSX.Element {
  return (
    <RadixToggle.Root
      {...delegated}
      sx={{
        '--transition': '56ms cubic-bezier(0.2, 0.2, 0.38, 0.9)',
        border: 'none',

        color: 'secondary',
        borderRadius: '10px',
        py: 2,
        px: 4,
        backgroundColor: 'bluegrey',
        fontFamily: 'body',
        fontWeight: 700,
        fontSize: `${13 / 16}rem`,

        transition: 'color var(--transition), background-color var(--transition)',

        '&:hover': {
          backgroundColor: '#CFD7FF',
        },

        '&[data-state=on]': {
          color: 'white',
          backgroundColor: 'secondary',
        },

        ...(prependIcon && {
          pt: 3,
        }),
      }}
    >
      {prependIcon && <ThemeUi.Box sx={{ display: 'inline-flex' }}>{prependIcon}</ThemeUi.Box>}

      <ThemeUi.Box>{children}</ThemeUi.Box>
    </RadixToggle.Root>
  );
}
