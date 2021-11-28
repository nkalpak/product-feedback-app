import { AppProvider } from '../src/providers/app';
import * as ThemeUi from 'theme-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AppProvider>
      <ThemeUi.Container
        sx={{
          backgroundColor: 'white',
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </ThemeUi.Container>
    </AppProvider>
  ),
];
