/** @jsxImportSource theme-ui */
import * as ThemeUi from 'theme-ui';
import * as RadixToggle from '@radix-ui/react-toggle';
import React from 'react';

interface IToggleProps extends RadixToggle.ToggleProps {
  prependIcon?: React.ReactNode;
}

function Toggle({ prependIcon, children, ...delegated }: IToggleProps): JSX.Element {
  return (
    <ToggleBase
      {...delegated}
      sx={{
        ...(prependIcon && {
          pt: 3,
        }),
      }}
    >
      {prependIcon && <ThemeUi.Box sx={{ display: 'inline-flex' }}>{prependIcon}</ThemeUi.Box>}

      <ThemeUi.Box>{children}</ThemeUi.Box>
    </ToggleBase>
  );
}

function ToggleHorizontal({ prependIcon, children, ...delegated }: IToggleProps) {
  return (
    <ToggleBase
      {...delegated}
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {prependIcon && (
        <ThemeUi.Box sx={{ display: 'inline-flex', mr: 2 }}>{prependIcon}</ThemeUi.Box>
      )}

      <ThemeUi.Box>{children}</ThemeUi.Box>
    </ToggleBase>
  );
}

function ToggleBase({ children, ...delegated }: RadixToggle.ToggleProps): JSX.Element {
  return (
    <RadixToggle.Root
      {...delegated}
      sx={{
        variant: 'badges.toggle',

        '--transition': '56ms cubic-bezier(0.2, 0.2, 0.38, 0.9)',
        transition: 'color var(--transition), background-color var(--transition)',

        '&:hover': {
          backgroundColor: '#CFD7FF',
        },

        '&[data-state=on]': {
          color: 'white',
          backgroundColor: 'secondary',
        },
      }}
    >
      {children}
    </RadixToggle.Root>
  );
}

export { ToggleHorizontal, Toggle };
