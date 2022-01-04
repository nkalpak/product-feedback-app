import create from 'zustand';
import { AuthConstants } from '@/features/auth/constants';

interface IAuthStore {
  accessToken: string | undefined;
  setAccessToken: (accessToken: string) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  accessToken: localStorage.getItem(AuthConstants.AccessTokenName) ?? undefined,
  setAccessToken: (accessToken) =>
    set((state) => ({
      ...state,
      accessToken,
    })),
}));
