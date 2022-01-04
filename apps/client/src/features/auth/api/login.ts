import * as ReactQuery from 'react-query';
import { Api } from '@pfa/api';
import { InferMutationOptions } from '@/types/utils';
import { AuthUtils } from '@/features/auth';

function loginApi(request: Api.RawClient.LoginRequestModel) {
  return Api.Auth.login(request);
}

export function useLogin(options?: InferMutationOptions<typeof loginApi>) {
  const { setAccessToken } = AuthUtils.useAuthStorage();
  return ReactQuery.useMutation(loginApi, {
    ...options,
    onSuccess: async (data, variables, context) => {
      setAccessToken(data.accessToken);
      await options?.onSuccess?.(data, variables, context);
    },
  });
}
