import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { TextInput } from '@/components/text-input/text-input';

export default {
  component: TextInput,
  title: 'Components/TextInput',
} as Meta;

const Template: Story<ComponentProps<typeof TextInput>> = (args) => <TextInput {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  value: 'Lorem ipsum dolor',
  sx: {
    width: 255,
  },
};
