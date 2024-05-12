import compose from 'compose-function';
import React, { FC } from 'react';
import { withHead } from '@/decorators/with-head';
import { AuthPageContent } from '@/containers/auth-page-content';
import { SignUpForm } from '@/components/sign-up-form';

const SignUpPage: FC = () => {
  return (
    <AuthPageContent>
      <SignUpForm />
    </AuthPageContent>
  );
};

export default compose(withHead('Sign up'))(SignUpPage);
