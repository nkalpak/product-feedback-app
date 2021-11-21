import React from 'react';

import { AppProvider } from '@/providers/app';
import { Outlet } from 'react-location';

function App() {
  return <AppProvider>
    <Outlet />
  </AppProvider>;
}

export default App;
