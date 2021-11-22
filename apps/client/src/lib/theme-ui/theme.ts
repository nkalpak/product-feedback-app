import { Theme } from 'theme-ui';

export const theme: Theme = {
  styles: {
    root: {
      '*, *:before, *:after': {
        'box-sizing': 'border-box',
      },
    },
  },

  fonts: {
    body: 'Jost, sans-serif',
    heading: 'Jost, sans-serif',
    monospace: 'Menlo, monospace',
  },

  colors: {
    primary: 'hsl(282, 83%, 52%)',
    secondary: 'hsl(230, 76%, 59%)',

    danger: '#D73737',

    darkgrey: {
      weak: 'hsl(224, 20%, 49%)',
      medium: 'hsl(231, 33%, 34%)',
      strong: 'hsl(230, 31%, 31%)',
    },

    lightgrey: 'hsl(230, 60%, 98%)',
    bluegrey: 'hsl(231, 100%, 97%)',

    white: 'hsl(0, 0%, 100%)',

    accent: {
      orange: 'hsl(14, 83%, 74%)',
      blue: 'hsl(204, 94%, 68%)',
    },
  },

  space: {
    1: '4px ',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '40px',
    10: '48px',
    11: '56px',
    12: '64px',
  },

  fontSizes: {
    xs: `${12 / 16}rem`,
    sm: `${14 / 16}rem`,
    md: `${16 / 16}rem`,
    lg: `${18 / 16}rem`,
    xl: `${20 / 16}rem`,
    '2xl': `${24 / 16}rem`,
  },

  text: {
    h1: {
      fontFamily: 'heading',
      fontWeight: 700,
      fontSize: '2xl',
      lineHeight: '35px',
      letterSpacing: '-0.33px',
    },
    h2: {
      fontFamily: 'heading',
      fontWeight: 700,
      fontSize: 'xl',
      lineHeight: '29px',
      letterSpacing: '-0.25px',
    },
    h3: {
      fontFamily: 'heading',
      fontWeight: 700,
      fontSize: 'lg',
      lineHeight: '26px',
      letterSpacing: '-0.25px',
    },
    h4: {
      fontFamily: 'heading',
      fontWeight: 700,
      fontSize: 'sm',
      lineHeight: '20px',
      letterSpacing: '-0.2px',
    },

    body1: {
      fontFamily: 'body',
      fontWeight: 400,
      fontSize: 'md',
      lineHeight: '23px',
    },
    body2: {
      fontFamily: 'body',
      fontWeight: 400,
      fontSize: `${15 / 16}rem`,
      lineHeight: '22px',
    },
    body3: {
      fontFamily: 'body',
      fontWeight: 600,
      fontSize: `${13 / 16}rem`,
      lineHeight: '19px',
    },
  },
};
