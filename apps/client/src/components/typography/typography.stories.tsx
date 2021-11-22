import { Meta, Story } from '@storybook/react';
import { Typography } from '@/components/typography/typography';
import { ComponentProps } from 'react';

export default {
  component: Typography,
  title: 'Components/Typography',
} as Meta;

const Template: Story<ComponentProps<typeof Typography>> = (args) => <Typography {...args} />;

export const H1: typeof Template = Template.bind({});
H1.args = {
  kind: 'h1',
  children: 'Hello from Title!',
};

export const H2: typeof Template = Template.bind({});
H2.args = {
  kind: 'h2',
  children: 'Hello from Title!',
};

export const H3: typeof Template = Template.bind({});
H3.args = {
  kind: 'h3',
  children: 'Hello from Title!',
};

export const H4: typeof Template = Template.bind({});
H4.args = {
  kind: 'h4',
  children: 'Hello from Title!',
};

export const Body1: typeof Template = Template.bind({});
Body1.args = {
  kind: 'body1',
  children: 'Hello from Title!',
};

export const Body2: typeof Template = Template.bind({});
Body2.args = {
  kind: 'body2',
  children: 'Hello from Title!',
};

export const Body3: typeof Template = Template.bind({});
Body3.args = {
  kind: 'body3',
  children: 'Hello from Title!',
};
