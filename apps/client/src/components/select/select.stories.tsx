import { Meta, Story } from '@storybook/react';
import { Select } from '@/components/select/select';
import { ComponentProps } from 'react';

export default {
  component: Select,
  title: 'Components/Select',
} as Meta;

const Template: Story<ComponentProps<typeof Select>> = (args) => <Select {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  onChange: console.log,
  value: 'feature',
  options: [
    {
      value: 'feature',
      label: 'Feature',
    },
    {
      value: 'ui',
      label: 'UI',
    },
    {
      value: 'ux',
      label: 'UX',
    },
  ],
};
