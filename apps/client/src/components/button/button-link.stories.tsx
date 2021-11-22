import { Meta, Story } from '@storybook/react';
import { ButtonLink } from '@/components/button/button-link';
import { ComponentProps } from 'react';
import { CaretLeftIcon } from '@modulz/radix-icons';

export default {
  component: ButtonLink,
  title: 'Components/ButtonLink',
} as Meta;

const Template: Story<ComponentProps<typeof ButtonLink>> = (args) => <ButtonLink {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  children: 'Go back',
  prependIcon: <CaretLeftIcon />,
};
