import React, { ElementType } from 'react';
import * as ThemeUi from 'theme-ui';

type TypographyKind = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3';

interface ITypographyProps extends ThemeUi.TextProps {
  kind: TypographyKind;
}

const TYPOGRAPHY_ELEMENT: Record<TypographyKind, ElementType> = {
  body1: 'p',
  body2: 'p',
  body3: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export function Typography({ kind, ...delegated }: ITypographyProps): JSX.Element {
  return <ThemeUi.Text {...delegated} as={TYPOGRAPHY_ELEMENT[kind]} variant={kind} />;
}
