import compose from 'compose-function';
import { FC } from 'react';
import { withHead } from '@/decorators/with-head';
import { withAuthLayout } from '@/decorators/with-auth-layout';

const HomePage: FC = () => {
  return (
    <>
      Home page
    </>
  );
};

export default compose(
  withHead('Home'),
  withAuthLayout,
)(HomePage);
