/** @jsxImportSource theme-ui */
import React from 'react';
import * as ThemeUi from 'theme-ui';
import { Typography } from '@/components/typography/typography';
import { GoBackButton } from '@/components/go-back-button';

interface IPageFormWrapperProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export function PageFormWrapper({ children, title, icon }: IPageFormWrapperProps): JSX.Element {
  return (
    <ThemeUi.Container
      variant="pageForm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
      }}
    >
      <GoBackButton sx={{ pl: 0, alignSelf: 'flex-start' }} />

      <ThemeUi.Box
        sx={{
          mt: 8,
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '10px',
          p: [6, 9],
          pt: 44,
        }}
      >
        <Typography kind="h3" sx={{ color: 'darkgrey.medium', textTransform: 'capitalize', mb: 6 }}>
          {title}
        </Typography>

        {children}

        <ThemeUi.Box
          sx={{
            position: 'absolute',
            top: '-20px',
            left: 6,
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundImage:
              'radial-gradient(farthest-corner at 40px 0, rgb(232, 77, 112) 0%, rgb(163, 55, 246) 60%, rgb(40, 167, 237) 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </ThemeUi.Box>
      </ThemeUi.Box>
    </ThemeUi.Container>
  );
}
