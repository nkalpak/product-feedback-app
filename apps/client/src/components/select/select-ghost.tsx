/** @jsxImportSource theme-ui */
import * as ThemeUi from 'theme-ui';
import { ISelectOption } from '@/components/select/types';
import { Typography } from '@/components/typography/typography';
import React from 'react';
import { ChevronDown } from 'react-feather';

interface ISelectProps extends ThemeUi.SelectProps {
  options: ISelectOption[];
  label: string;
}

export function SelectGhost({ options, label, value, sx, ...delegated }: ISelectProps) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <ThemeUi.Label sx={{ isolation: 'isolate', position: 'relative', width: 'fit-content', ...sx }}>
      <Typography kind="body2">{label}</Typography>
      {selectedOption && (
        <ThemeUi.Flex sx={{ ml: 2 }}>
          <Typography kind="body2" sx={{ fontWeight: 800 }}>
            {selectedOption.label}
          </Typography>

          <ChevronDown
            strokeWidth={3}
            width={16}
            sx={{
              ml: 1,
            }}
          />
        </ThemeUi.Flex>
      )}

      <select
        sx={{
          border: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0,
        }}
        {...delegated}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </ThemeUi.Label>
  );
}
