import { Api } from '@pfa/api';
import { AuthService } from '@/features/auth';
import { z } from 'zod';
import { Form, InputField } from '@/components/form';
import React from 'react';
import { PageFormWrapper } from '@/components/page-form-wrapper';
import { Button } from '@/components/button/button';
import { Validation } from '@/utils';

const schema = z.object({
  password: Validation.Password,
  username: z.string().min(1, 'Username is required'),
});

type FormData = Api.RawClient.RegisterRequestModel;

export function Register() {
  const onRegister = AuthService.useRegister();

  function onSubmit(data: FormData) {
    onRegister.mutate(data);
  }

  return (
    <PageFormWrapper title="Register" icon={<React.Fragment />}>
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
              description="Must be at least 6 characters long"
            />

            <Button disabled={onRegister.isSuccess} type="submit">
              Register
            </Button>
          </React.Fragment>
        )}
      </Form>
    </PageFormWrapper>
  );
}
