import * as ThemeUi from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { RelativeLoadingIndicator } from '@/components/loading-indicator/relative-loading-indicator';
import { ComponentProps } from 'react';
import { Typography } from '@/components/typography/typography';
import { Button } from '@/components/button/button';

export default {
  component: RelativeLoadingIndicator,
  title: 'Components/RelativeLoadingIndicator',
} as Meta;

const Template: Story<ComponentProps<typeof RelativeLoadingIndicator>> = (args) => (
  <ThemeUi.Box
    sx={{
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      width: 500,
      p: 4,
      mx: 'auto',
      position: 'relative',
    }}
  >
    <Typography kind="body1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At distinctio laborum magnam
      mollitia nisi non officiis quis similique? Aliquam distinctio dolores iure repudiandae sed sit
      temporibus vero voluptate voluptatem voluptatum.
    </Typography>

    <ThemeUi.Divider />

    <Typography kind="body1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At distinctio laborum magnam
      mollitia nisi non officiis quis similique? Aliquam distinctio dolores iure repudiandae sed sit
      temporibus vero voluptate voluptatem voluptatum.
    </Typography>

    <br />

    <Button sx={{ width: '100%' }}>Click me</Button>

    <RelativeLoadingIndicator {...args} />
  </ThemeUi.Box>
);

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  loadingText: 'Submitting your form...',
};
