import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import * as ThemeUi from 'theme-ui';

import { Notifications } from '@/components/notifications';
import { queryClient } from '@/lib/react-query';
import { theme } from '@/lib/theme-ui';
import { Router } from '@/lib/react-location';

type AppProviderProps = {
  children: React.ReactNode;
};

function ErrorFallback() {
  return (
    <ThemeUi.Box role="alert">
      <ThemeUi.Text as="h2">Oops, something went wrong.</ThemeUi.Text>
      <ThemeUi.Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </ThemeUi.Button>
    </ThemeUi.Box>
  );
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Notifications />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

          <Router>
            <ThemeUi.ThemeProvider theme={theme}>{children}</ThemeUi.ThemeProvider>
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
