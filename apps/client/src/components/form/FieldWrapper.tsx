import * as React from 'react';
import { FieldError } from 'react-hook-form';
import * as ThemeUi from 'theme-ui';

interface IFieldWrapperProps {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
}

export type FieldWrapperPassThroughProps = Omit<IFieldWrapperProps, 'className' | 'children'>;

export function FieldWrapper({
  label,
  className,
  error,
  children,
  description,
}: IFieldWrapperProps): JSX.Element {
  return (
    <div>
      <ThemeUi.Label
        className={className}
        sx={{
          fontFamily: 'body',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ThemeUi.Box sx={{ mb: 4 }}>
          {label && (
            <ThemeUi.Text
              sx={{
                fontWeight: 600,
                fontSize: 'md',
                color: 'darkgrey.medium',
                display: 'block',
              }}
            >
              {label}
            </ThemeUi.Text>
          )}

          {description && (
            <ThemeUi.Text
              sx={{
                color: 'darkgrey.weak',
                fontSize: 'md',
                display: 'block',
              }}
            >
              {description}
            </ThemeUi.Text>
          )}
        </ThemeUi.Box>

        <div>{children}</div>
      </ThemeUi.Label>

      {error?.message && (
        <ThemeUi.Box role="alert" aria-label={error.message}>
          <ThemeUi.Text
            sx={{
              fontSize: 'md',
              color: 'danger',
              fontFamily: 'body',
            }}
          >
            {error.message}
          </ThemeUi.Text>
        </ThemeUi.Box>
      )}
    </div>
  );
}
