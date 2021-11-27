import { Meta, Story } from '@storybook/react';
import { Textarea } from '@/components/textarea/textarea';
import { ComponentProps } from 'react';

export default {
  component: Textarea,
  title: 'Components/Textarea',
} as Meta;

const Template: Story<ComponentProps<typeof Textarea>> = (args) => <Textarea {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {};
