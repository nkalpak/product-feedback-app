import { AuthService } from '@/features/auth';
import { Button } from '@/components/button/button';
import { PageFormWrapper } from '@/components/page-form-wrapper';
import { Form, InputField } from '@/components/form';
import React from 'react';
import { z } from 'zod';
import { Api } from '@pfa/api';
import { Validation } from '@/utils';

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: Validation.Password,
});

type FormData = Api.RawClient.LoginRequestModel;

export function Login() {
  const login = AuthService.useLogin();

  function onSubmit(data: FormData) {
    login.mutate(data);
  }

  return (
    <PageFormWrapper title="Login" icon={<React.Fragment />}>
      <Form<FormData> schema={schema} onSubmit={onSubmit}>
        {({ register, formState }) => (
          <React.Fragment>
            <InputField
              registration={register('username')}
              error={formState.errors.username}
              label="Username"
            />

            <InputField
              registration={register('password')}
              type="password"
              error={formState.errors.password}
              label="Password"
            />

            <Button disabled={login.isSuccess} type="submit">
              Login
            </Button>
          </React.Fragment>
        )}
      </Form>
    </PageFormWrapper>
  );
}
