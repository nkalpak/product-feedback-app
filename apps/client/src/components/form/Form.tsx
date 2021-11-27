import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps } from 'react-hook-form';
import * as ThemeUi from 'theme-ui';
import { ZodType, ZodTypeDef } from 'zod';

interface IFormProps<TFormValues, Schema> {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
}

export function Form<
  TFormValues extends object = object,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: IFormProps<TFormValues, Schema>): JSX.Element {
  const methods = useForm<TFormValues>({ ...options, resolver: schema && zodResolver(schema) });
  return (
    <ThemeUi.Flex
      className={className}
      as="form"
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
      sx={{
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {children(methods)}
    </ThemeUi.Flex>
  );
}
