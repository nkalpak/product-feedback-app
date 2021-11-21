import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from '@/stories/Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
