import * as ThemeUi from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Toggle } from '@/components/toggle/toggle';
import { ComponentProps } from 'react';
import { ChevronUpIcon } from '@modulz/radix-icons';

export default {
  component: Toggle,
  title: 'Components/Toggle',
} as Meta;

const Template: Story<ComponentProps<typeof Toggle>> = (args) => <Toggle {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  children: <ThemeUi.Text>UX</ThemeUi.Text>,
};

export const WithIcon: typeof Template = Template.bind({});
WithIcon.args = {
  children: <ThemeUi.Text>100</ThemeUi.Text>,
  prependIcon: <ChevronUpIcon />,
};
