import * as ReactQuery from 'react-query';

import { QueryConfig } from '@/lib/react-query';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: 'ADMIN' | 'USER';
  teamId: string;
  bio: string;
};

export const getUsers = (): Promise<User[]> => {
  return {} as any;
};

type UseUsersOptions = {
  config?: QueryConfig<typeof getUsers>;
};

export const useUsers = ({ config }: UseUsersOptions = {}) => {
  return ReactQuery.useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
    ...config,
  });
};
