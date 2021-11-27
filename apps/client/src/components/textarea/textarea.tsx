/** @jsxImportSource theme-ui */
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

interface ITextareaProps extends TextareaAutosizeProps {}

export function Textarea(props: ITextareaProps): JSX.Element {
  return (
    <TextareaAutosize
      minRows={2}
      maxRows={16}
      sx={{
        '&:focus, &:active': {
          outline: '1px solid',
          outlineColor: 'secondary',
        },

        resize: 'none',
        variant: 'forms.baseField',
      }}
      {...props}
    />
  );
}
