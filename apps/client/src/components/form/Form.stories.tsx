import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import * as ThemeUi from 'theme-ui';

import { Form } from './Form';
import { InputField } from './InputField';
import { SelectField } from './SelectField';
import { UnpackNestedValue } from 'react-hook-form';
import { Button } from '@/components/button/button';
import { TextAreaField } from '@/components/form/TextareaField';

interface IFormValues {
  title: string;
  description: string;
  type: string;
  content: string;
}

function MyForm({ hideSubmit = false }: { hideSubmit?: boolean }): JSX.Element {
  function handleSubmit(values: UnpackNestedValue<IFormValues>): void {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <Form<IFormValues> onSubmit={handleSubmit} id="my-form">
      {({ register, formState, control }) => (
        <React.Fragment>
          <InputField
            description="The title of the thing"
            label="Title"
            error={formState.errors.title}
            registration={register('title')}
          />

          <SelectField
            placeholder="Team"
            description="Which team is this in?"
            label="Team"
            control={control}
            name="team"
            options={['A', 'B', 'C'].map((type) => ({
              label: type,
              value: type,
            }))}
          />

          <TextAreaField
            label="Description"
            description="Provide a short description"
            registration={register('description')}
          />

          {!hideSubmit && (
            <ThemeUi.Box sx={{ mt: 4 }}>
              <Button type="submit">Submit</Button>
            </ThemeUi.Box>
          )}
        </React.Fragment>
      )}
    </Form>
  );
}

const meta: Meta = {
  title: 'Components/Form',
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <MyForm />;

export const Default: typeof Template = Template.bind({});
Default.args = {};
