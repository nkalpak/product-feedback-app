import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { TextInput } from '@/components/text-input/text-input';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export function InputField({
  className,
  error,
  description,
  label,
  registration,
  type,
}: InputFieldProps): JSX.Element {
  return (
    <FieldWrapper description={description} label={label} error={error}>
      <TextInput type={type} className={className} {...registration} />
    </FieldWrapper>
  );
}
