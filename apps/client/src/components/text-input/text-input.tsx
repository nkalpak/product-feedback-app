import * as ThemeUi from 'theme-ui';

interface ITextInputProps extends ThemeUi.InputProps {}

export function TextInput({ sx, ...delegated }: ITextInputProps): JSX.Element {
  return (
    <ThemeUi.Input
      type="text"
      variant="baseField"
      {...delegated}
      sx={{
        '&:active, &:focus': {
          outline: '1px solid',
          outlineColor: 'secondary',
        },

        ...sx,
      }}
    />
  );
}
