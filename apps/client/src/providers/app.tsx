import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import * as ThemeUi from 'theme-ui';

import { Notifications } from '@/components/notifications';
import { queryClient } from '@/lib/react-query';
import { theme } from '@/lib/theme-ui';
import { Router } from '@/lib/react-location';

interface IAppProviderProps {
  children: React.ReactNode;
}

function ErrorFallback(): JSX.Element {
  function handleRefresh(): void {
    window.location.assign(window.location.origin);
  }

  return (
    <ThemeUi.Box role="alert">
      <ThemeUi.Text as="h2">Oops, something went wrong.</ThemeUi.Text>
      <ThemeUi.Button onClick={handleRefresh}>Refresh</ThemeUi.Button>
    </ThemeUi.Box>
  );
}

export function AppProvider({ children }: IAppProviderProps): JSX.Element {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Notifications />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

          <ThemeUi.ThemeProvider theme={theme}>
            <Router>{children}</Router>
          </ThemeUi.ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
