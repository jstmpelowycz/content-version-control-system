import React, { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { Header } from '@/widgets/header';
import { NavigationPanel } from '@/widgets/navigation-panel';
import { ContentLayout } from '@/layouts/content-layout';

import * as sx from './AuthLayout.styles';

export const AuthLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Box sx={sx.container}>
      <NavigationPanel />

      <Box sx={sx.content}>
        <Header />

        <ContentLayout>
          {children}
        </ContentLayout>
      </Box>
    </Box>
  );
};
