import { Meta, Story } from '@storybook/react';
import { CaretLeftIcon } from '@modulz/radix-icons';
import { Button } from '@/components/button/button';
import { ComponentProps } from 'react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  children: 'Click me!',
};

export const WithIcon: typeof Template = Template.bind({});
WithIcon.args = {
  children: 'Go back',
  prependIcon: <CaretLeftIcon />,
};
