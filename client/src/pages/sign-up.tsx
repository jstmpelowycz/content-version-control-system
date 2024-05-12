import compose from 'compose-function';
import React, { FC } from 'react';
import { withHead } from '@/decorators/with-head';
import { SignUpPageContent } from '@/containers/sign-up-page-content';

const SignUpPage: FC = () => {
  return <SignUpPageContent />;
};

export default compose(withHead('Sign up'))(SignUpPage);
