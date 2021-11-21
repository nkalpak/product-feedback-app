import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as ThemeUi from 'theme-ui';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export function SelectField(props: SelectFieldProps) {
  const { label, options, error, className, defaultValue, registration, placeholder } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <ThemeUi.Select
        placeholder={placeholder}
        name="location"
        className={className}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </ThemeUi.Select>
    </FieldWrapper>
  );
}
