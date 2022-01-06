import * as ThemeUi from 'theme-ui';

interface ISpacerProps {
  y?: number;
  x?: number;
}

export function Spacer({ y = 0, x = 0 }: ISpacerProps) {
  return <ThemeUi.Box sx={{ minHeight: y, minWidth: x }} />;
}
