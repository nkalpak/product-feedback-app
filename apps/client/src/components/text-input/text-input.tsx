import * as ThemeUi from 'theme-ui';
import React, { ForwardRefExoticComponent } from 'react';

interface ITextInputProps extends ThemeUi.InputProps {
  isError?: boolean;
}

export const TextInput: ForwardRefExoticComponent<ITextInputProps> = React.forwardRef<
  HTMLInputElement,
  ITextInputProps
>(({ sx, isError, ...delegated }, ref): JSX.Element => {
  return (
    <ThemeUi.Input
      ref={ref}
      type="text"
      variant="baseField"
      {...delegated}
      sx={{
        ...(isError
          ? {
              outline: '1px solid',
              outlineColor: 'danger',
            }
          : {
              '&:active, &:focus': {
                outline: '1px solid',
                outlineColor: 'secondary',
              },
            }),

        ...sx,
      }}
    />
  );
});
