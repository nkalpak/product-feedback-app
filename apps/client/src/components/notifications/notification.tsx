import * as ThemeUi from 'theme-ui';

type NotificationProps = {
  title: string;
  description: string;
  severity?: 'error' | 'warning' | 'info';
};

const NOTIFICATION_SEVERITIES: Record<
  Required<NotificationProps>['severity'],
  ThemeUi.ThemeUIStyleObject
> = {
  error: {
    backgroundColor: 'red',
  },
  info: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'yellow',
    color: 'black',
  },
};

export function Notification({ title, description, severity = 'info' }: NotificationProps) {
  return (
    <ThemeUi.Box
      sx={{
        maxWidth: 320,
        p: 3,
        color: 'white',
        ...NOTIFICATION_SEVERITIES[severity],
      }}
    >
      <ThemeUi.Text as="h2">{title}</ThemeUi.Text>

      <ThemeUi.Divider />

      <ThemeUi.Text as="p" sx={{ mt: 2 }}>
        {description}
      </ThemeUi.Text>
    </ThemeUi.Box>
  );
}
