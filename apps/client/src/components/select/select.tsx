/** @jsxImportSource theme-ui */
import * as ThemeUi from 'theme-ui';
import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { ISelectOption } from '@/components/select/types';

interface ISelectProps extends ThemeUi.SelectProps {
  options: ISelectOption[];
}

export function Select({
  value,
  sx,
  options,
  placeholder,
  ...delegated
}: ISelectProps): JSX.Element {
  const selectedOption = options.find((option) => option.value === value);
  const resolvedCurrentValueLabel = selectedOption?.label ?? placeholder;
  const isCurrentValuePlaceholder = Boolean(placeholder) && !selectedOption;

  return (
    <ThemeUi.Label
      sx={{
        isolation: 'isolate',
        position: 'relative',
      }}
    >
      <select
        sx={{
          '&:active, &:focus + div': {
            outline: '1px solid',
            outlineColor: 'secondary',
          },

          border: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0,
          ...sx,
        }}
        {...delegated}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <ThemeUi.Box
        sx={{
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          variant: 'forms.baseField',
        }}
      >
        <ThemeUi.Text
          sx={{
            ...(isCurrentValuePlaceholder && {
              opacity: 0.5,
            }),
          }}
        >
          {resolvedCurrentValueLabel}
        </ThemeUi.Text>
      </ThemeUi.Box>

      <ChevronDownIcon
        sx={{
          position: 'absolute',
          right: 6,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </ThemeUi.Label>
  );
}
