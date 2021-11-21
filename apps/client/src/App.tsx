import React from 'react';

import { AppProvider } from '@/providers/app';
import { Outlet } from 'react-location';

function App(): JSX.Element {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
}

export default App;
