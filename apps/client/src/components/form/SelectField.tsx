import * as React from 'react';
import { Control, useController } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Select } from '@/components/select/select';

interface IOption {
  label: string;
  value: string;
}

interface ISelectFieldProps extends Omit<FieldWrapperPassThroughProps, 'error'> {
  options: IOption[];
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
}

export function SelectField({
  control,
  options,
  name,
  label,
  description,
  placeholder,
}: ISelectFieldProps): JSX.Element {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ control, name });

  return (
    <FieldWrapper description={description} label={label} error={error}>
      <Select
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        options={options.map(({ label, value }) => ({ label, value }))}
      />
    </FieldWrapper>
  );
}
