import { Meta, Story } from '@storybook/react';
import { SelectGhost } from '@/components/select/select-ghost';
import { ComponentProps } from 'react';

export default {
  component: SelectGhost,
  title: 'Components/SelectGhost',
} as Meta;

const Template: Story<ComponentProps<typeof SelectGhost>> = (args) => <SelectGhost {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  onChange: console.log,
  value: 'feature',
  label: 'Sort by:',
  options: [
    {
      value: 'most-upvotes',
      label: 'Most Upvotes',
    },
    {
      value: 'most-viewed',
      label: 'Most Viewed',
    },
    {
      value: 'hot',
      label: 'Hot',
    },
  ],
};
