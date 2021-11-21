import * as React from 'react';
import { FieldError } from 'react-hook-form';
import * as ThemeUi from 'theme-ui';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export function FieldWrapper(props: FieldWrapperProps) {
  const { label, className, error, children } = props;
  return (
    <div>
      <ThemeUi.Label className={className}>
        {label}
        <div className="mt-1">{children}</div>
      </ThemeUi.Label>

      {error?.message && (
        <ThemeUi.Box
          role="alert"
          aria-label={error.message}
          sx={{
            color: 'red',
          }}
        >
          {error.message}
        </ThemeUi.Box>
      )}
    </div>
  );
}
