/** @jsxImportSource theme-ui */
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Textarea } from '@/components/textarea/textarea';

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export function TextAreaField({
  label,
  registration,
  error,
  className,
  description,
}: TextAreaFieldProps): JSX.Element {
  return (
    <FieldWrapper description={description} label={label} error={error}>
      <Textarea className={className} {...registration} sx={{ width: '100%' }} />
    </FieldWrapper>
  );
}
