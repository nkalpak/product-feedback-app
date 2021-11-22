import { ButtonBase, IButtonBaseProps } from '@/components/button/button-base';

type ButtonLinkKind = 'filled' | 'ghost';

interface IButtonLinkProps extends IButtonBaseProps {
  kind?: ButtonLinkKind;
}

const BACKGROUND_COLOR: Record<ButtonLinkKind, string> = {
  ghost: 'transparent',
  filled: 'darkgrey.medium',
};

const COLOR: Record<ButtonLinkKind, string> = {
  ghost: 'darkgrey.weak',
  filled: 'bluegrey',
};

export function ButtonLink({ kind = 'filled', ...delegated }: IButtonLinkProps): JSX.Element {
  return (
    <ButtonBase
      {...delegated}
      sx={{
        ...delegated.sx,

        '&:hover': {
          textDecoration: 'underline',
        },
        backgroundColor: BACKGROUND_COLOR[kind],
        py: 4,
        color: COLOR[kind],
      }}
    />
  );
}
