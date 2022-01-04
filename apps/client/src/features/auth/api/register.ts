import * as ReactQuery from 'react-query';
import { InferMutationOptions } from '@/types/utils';
import { Api } from '@pfa/api';
import { AuthUtils } from '@/features/auth';

function registerApi(request: Api.RawClient.RegisterRequestModel) {
  return Api.Auth.register(request);
}

export function useRegister(options?: InferMutationOptions<typeof registerApi>) {
  const { setAccessToken } = AuthUtils.useAuthStorage();
  return ReactQuery.useMutation(registerApi, {
    ...options,
    onSuccess: async (data, variables, context) => {
      setAccessToken(data.accessToken);
      await options?.onSuccess?.(data, variables, context);
    },
  });
}
