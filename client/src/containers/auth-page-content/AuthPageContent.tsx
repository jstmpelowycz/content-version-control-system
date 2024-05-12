import React, { FC, PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import { Copyright } from '@/widgets/copyright/Copyright';

import * as sx from './AuthPageContent.styles';

export const AuthPageContent: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Container
      sx={sx.container}
      component="main"
      maxWidth="xs"
    >
      {children}

      <Copyright />
    </Container>
  );
};
