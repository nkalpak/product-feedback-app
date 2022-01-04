import { useAuthStore } from '@/stores/auth';
import React from 'react';
import { AuthConstants } from '@/features/auth/constants';

/*
 * Storage for authentication-based tokens.
 * */
function useAuthStorage() {
  const { accessToken, setAccessToken } = useAuthStore();

  return React.useMemo(
    () => ({
      accessToken,
      setAccessToken: (accessToken: string) => {
        localStorage.setItem(AuthConstants.AccessTokenName, accessToken);
        setAccessToken(accessToken);
      },
    }),
    [accessToken, setAccessToken]
  );
}

export { useAuthStorage };
