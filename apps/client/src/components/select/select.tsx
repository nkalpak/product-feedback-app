/** @jsxImportSource theme-ui */
import * as ThemeUi from 'theme-ui';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { CheckIcon, ChevronDownIcon } from '@modulz/radix-icons';
import { theme } from '@/lib/theme-ui';

interface IOption {
  label: string;
  value: string;
}

interface ISelectProps {
  options: IOption[];
  value: string;
  onChange: (value: string) => void;
}

const SELECT_MIN_WIDTH: number = 255;

export function Select({ options, onChange, value }: ISelectProps): JSX.Element {
  function handleRadioGroupValueChange(newValue: string): void {
    onChange(newValue);
  }

  function isLastItem(index: number, itemCount: number): boolean {
    return index === itemCount - 1;
  }

  const selectedOption = options.find((option) => option.value === value);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        sx={{
          border: 'none',

          backgroundColor: 'lightgrey',
          borderRadius: '5px',
          px: 6,
          py: 3,
          minWidth: SELECT_MIN_WIDTH,

          '&:hover, &:focus': {
            outline: '1px solid',
            outlineColor: 'secondary',
          },
        }}
      >
        <ThemeUi.Flex sx={{ color: 'secondary', alignItems: 'center' }}>
          <ThemeUi.Text
            sx={{
              mr: 'auto',
              color: 'darkgrey.medium',
              fontFamily: 'body',
              fontSize: `${15 / 16}rem`,
            }}
          >
            {selectedOption?.label ?? 'Select...'}
          </ThemeUi.Text>
          <ChevronDownIcon />
        </ThemeUi.Flex>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sx={{
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '10px 0 40px -7px rgba(55, 63, 104, 35%)',
        }}
      >
        <DropdownMenu.RadioGroup value={value} onValueChange={handleRadioGroupValueChange}>
          {options.map((option, index) => (
            <DropdownMenu.RadioItem
              key={option.value}
              value={option.value}
              sx={{
                minWidth: SELECT_MIN_WIDTH,
                fontFamily: 'body',
                color: 'darkgrey.weak',
                '&:focus': {
                  color: 'primary',
                  outline: 'none',
                },
              }}
            >
              <ThemeUi.Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  py: 3,
                  px: 6,
                }}
              >
                <ThemeUi.Text sx={{ cursor: 'default' }}>{option.label}</ThemeUi.Text>

                <DropdownMenu.ItemIndicator sx={{ display: 'inline-flex', ml: 'auto' }}>
                  <CheckIcon color={(theme.colors?.primary as string) ?? 'currentColor'} />
                </DropdownMenu.ItemIndicator>
              </ThemeUi.Box>

              {!isLastItem(index, options.length) && (
                <DropdownMenu.Separator
                  sx={{
                    height: 1,
                    backgroundColor: '#E1E3EA',
                  }}
                />
              )}
            </DropdownMenu.RadioItem>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
