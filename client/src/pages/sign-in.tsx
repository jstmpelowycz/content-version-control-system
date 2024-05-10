import compose from 'compose-function';
import { FC } from 'react';
import { withHead } from '@/decorators/with-head';

const SignInPage: FC = () => {
  return (
    <>
      Sign-in page
    </>
  );
};

export default compose(withHead('Sign in'))(SignInPage);
