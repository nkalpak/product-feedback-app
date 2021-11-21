import * as ThemeUi from 'theme-ui';

interface INotificationProps {
  title: string;
  description: string;
  severity?: 'error' | 'warning' | 'info';
}

const NOTIFICATION_SEVERITIES: Record<
  Required<INotificationProps>['severity'],
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

export function Notification({ title, description, severity = 'info' }: INotificationProps) {
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
