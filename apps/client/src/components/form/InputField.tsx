import { UseFormRegisterReturn } from 'react-hook-form';
import * as ThemeUi from 'theme-ui';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export function InputField(props: InputFieldProps) {
  const { type = 'text', label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <ThemeUi.Input type={type} className={className} {...registration} />
    </FieldWrapper>
  );
}
