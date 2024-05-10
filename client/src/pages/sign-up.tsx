import compose from 'compose-function';
import { FC } from 'react';
import { withHead } from '@/decorators/with-head';

const SignUpPage: FC = () => {
  return (
    <>
      Sign-up page
    </>
  );
};

export default compose(withHead('Sign up'))(SignUpPage);
