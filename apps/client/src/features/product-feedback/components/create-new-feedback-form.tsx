import * as R from 'remeda';
import * as ThemeUi from 'theme-ui';
import { Form, InputField, SelectField, TextAreaField } from '@/components/form';
import { Api } from '@pfa/api';
import React from 'react';
import { Button } from '@/components/button/button';

type IFormData = Pick<Api.ProductRequest.IProductRequest, 'title' | 'category' | 'description'>;

const categories: Record<Api.ProductRequest.ICategory, string> = {
  feature: 'Feature',
  bug: 'Bug',
  ui: 'UI',
  ux: 'UX',
  enhancement: 'Enhancement',
};

export function CreateNewFeedbackForm(): JSX.Element {
  return (
    <Form<IFormData> schema={Api.ProductRequest.ProductRequestParser} onSubmit={console.log}>
      {({ register, control, formState }) => (
        <React.Fragment>
          <InputField
            registration={register('title')}
            error={formState.errors.title}
            label="Feedback Title"
            description="Add a short, descriptive headline"
          />

          <SelectField
            label="Category"
            description="Choose a category for your feedback"
            defaultValue="feature"
            options={R.toPairs(categories).map(([value, label]) => ({
              label,
              value,
            }))}
            control={control}
            name="category"
          />

          <TextAreaField
            registration={register('description')}
            label="Feedback Detail"
            error={formState.errors.description}
            description="Include any specific comments on what should be improved, added, etc."
          />

          <ThemeUi.Flex sx={{ gap: 4, alignSelf: 'flex-end' }}>
            <Button type="button" color="tertiary">
              Cancel
            </Button>
            <Button type="submit">Add feedback</Button>
          </ThemeUi.Flex>
        </React.Fragment>
      )}
    </Form>
  );
}
