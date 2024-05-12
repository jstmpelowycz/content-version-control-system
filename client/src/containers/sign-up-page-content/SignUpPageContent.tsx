import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { Copyright } from '@/widgets/copyright/Copyright';
import { SignUpForm } from '@/components/sign-up-form';

import * as sx from './SignUpPageContent.styles';

export const SignUpPageContent: FC = () => {
  return (
    <Container
      sx={sx.container}
      component="main"
      maxWidth="xs"
    >
      <SignUpForm />
      <Copyright />
    </Container>
  );
};
