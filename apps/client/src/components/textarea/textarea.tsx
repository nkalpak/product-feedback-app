/** @jsxImportSource theme-ui */
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';
import React, { ForwardRefExoticComponent } from 'react';

interface ITextareaProps extends TextareaAutosizeProps {
  isError?: boolean;
}

export const Textarea: ForwardRefExoticComponent<ITextareaProps> = React.forwardRef<
  HTMLTextAreaElement,
  ITextareaProps
>(({ isError, ...delegated }, ref): JSX.Element => {
  return (
    <TextareaAutosize
      ref={ref}
      minRows={2}
      maxRows={16}
      sx={{
        ...(isError
          ? {
              outline: '1px solid',
              outlineColor: 'danger',
            }
          : {
              '&:active, &:focus': {
                outline: '1px solid',
                outlineColor: 'secondary',
              },
            }),

        resize: 'none',
        variant: 'forms.baseField',
      }}
      {...delegated}
    />
  );
});
