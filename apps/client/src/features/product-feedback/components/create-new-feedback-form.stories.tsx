import { Meta, Story } from '@storybook/react';
import { CreateNewFeedbackForm } from '@/features/product-feedback/components';
import { ComponentProps } from 'react';

export default {
  component: CreateNewFeedbackForm,
  title: 'Components/ProductFeedback/CreateNewFeedback',
} as Meta;

const Template: Story<ComponentProps<typeof CreateNewFeedbackForm>> = () => (
  <CreateNewFeedbackForm />
);

export const Primary: typeof Template = Template.bind({});
Primary.args = {};
