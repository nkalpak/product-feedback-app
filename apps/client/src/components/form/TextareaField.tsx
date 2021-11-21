import { UseFormRegisterReturn } from 'react-hook-form';
import * as ThemeUi from 'theme-ui';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export function TextAreaField(props: TextAreaFieldProps) {
  const { label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <ThemeUi.Textarea className={className} {...registration} />
    </FieldWrapper>
  );
}
