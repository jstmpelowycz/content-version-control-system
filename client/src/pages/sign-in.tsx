import compose from 'compose-function';
import React, { FC } from 'react';
import { withHead } from '@/decorators/with-head';
import { AuthPageContent } from '@/containers/auth-page-content';
import { SignInForm } from '@/components/sign-in-form';

const SignInPage: FC = () => {
  return (
    <AuthPageContent>
      <SignInForm />
    </AuthPageContent>
  );
};

export default compose(withHead('Sign in'))(SignInPage);
