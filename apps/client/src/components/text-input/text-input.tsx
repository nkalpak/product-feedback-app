import * as ThemeUi from 'theme-ui';

interface ITextInputProps extends ThemeUi.InputProps {}

export function TextInput({ sx, ...delegated }: ITextInputProps): JSX.Element {
  return (
    <ThemeUi.Input
      type="text"
      {...delegated}
      sx={{
        border: 'none',

        fontFamily: 'body',
        fontSize: `${15 / 16}rem`,
        color: 'darkgrey.medium',
        px: 6,
        backgroundColor: 'lightgrey',

        '&:active, &:focus': {
          outline: '1px solid',
          outlineColor: 'secondary',
        },

        ...sx,
      }}
    />
  );
}
