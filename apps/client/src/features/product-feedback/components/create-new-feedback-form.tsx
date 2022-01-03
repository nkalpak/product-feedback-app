import * as R from 'remeda';
import * as ThemeUi from 'theme-ui';
import * as Location from 'react-location';
import { Form, InputField, SelectField, TextAreaField } from '@/components/form';
import { Api } from '@pfa/api';
import React from 'react';
import { Button } from '@/components/button/button';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { LocationGenerics } from '@/lib/react-location';
import { ProductFeedbackService } from '@/features/product-feedback';

type IFormData = Pick<Api.ProductRequest.IProductFeedback, 'title' | 'category' | 'description'>;

const categories: Record<Api.ProductRequest.ICategory, string> = {
  feature: 'Feature',
  bug: 'Bug',
  ui: 'UI',
  ux: 'UX',
  enhancement: 'Enhancement',
};

export function CreateNewFeedbackForm(): JSX.Element {
  const search = Location.useSearch<LocationGenerics>();
  const navigate = Location.useNavigate<LocationGenerics>();
  const createProductFeedback = ProductFeedbackService.useCreateProductFeedback();

  function onCancel(): void {
    navigate({ to: '/' });
  }

  function onSubmit({ description, category, title }: IFormData): void {
    createProductFeedback.mutate({
      title,
      description,
      category,
    });
  }

  return (
    <Form<IFormData>
      schema={Api.ProductRequest.ProductFeedbackParser}
      options={{ defaultValues: search.createNewFeedback }}
      onSubmit={onSubmit}
    >
      {({ register, control, formState }) => (
        <React.Fragment>
          <FormQueryStatePersist control={control} />

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

          <ThemeUi.Flex
            sx={{
              gap: 4,
              alignSelf: ['auto', 'flex-end'],
              flexDirection: ['column-reverse', 'row'],
            }}
          >
            <Button onClick={onCancel} type="button" color="tertiary">
              Cancel
            </Button>
            <Button type="submit">Add feedback</Button>
          </ThemeUi.Flex>
        </React.Fragment>
      )}
    </Form>
  );
}

function FormQueryStatePersist({ control }: Pick<UseFormReturn<IFormData>, 'control'>): null {
  const navigate = Location.useNavigate<LocationGenerics>();
  const { title, description, category } = useWatch({ control });

  React.useEffect(() => {
    navigate({
      search: {
        createNewFeedback: {
          title,
          description,
          category,
        },
      },
      replace: true,
    });
  }, [title, description, category, navigate]);

  return null;
}
