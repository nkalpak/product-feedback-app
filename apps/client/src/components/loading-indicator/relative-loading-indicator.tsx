import * as ThemeUi from 'theme-ui';
import { Typography } from '@/components/typography/typography';

interface IRelativeLoadingIndicatorProps {
  loadingText?: string;
}

/*
 * A loading indicator which will overlay over the closest
 * relatively positioned element.
 * */
export function RelativeLoadingIndicator({
  loadingText,
}: IRelativeLoadingIndicatorProps): JSX.Element {
  return (
    <ThemeUi.Flex
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <ThemeUi.Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <ThemeUi.Spinner size={20} sx={{ position: 'relative', left: '-2px' }} />

        {loadingText && (
          <Typography kind="body3" sx={{ mt: 1 }}>
            {loadingText}
          </Typography>
        )}
      </ThemeUi.Flex>
    </ThemeUi.Flex>
  );
}
