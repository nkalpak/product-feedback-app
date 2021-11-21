import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import { Notification } from '@/components/notifications';

export default {
  title: 'Components/Notification',
  component: Notification,
} as Meta;

const Template: Story<ComponentProps<typeof Notification>> = (args) => <Notification {...args} />;

export const Info = Template.bind({});
Info.args = {
  title: 'Info',
  description: 'Some informational text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error notification',
  description: 'An error has occurred',
  severity: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning!',
  description: "You've been warned!",
  severity: 'warning',
};
