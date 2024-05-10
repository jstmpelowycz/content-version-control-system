import compose from 'compose-function';
import { FC } from 'react';
import { withHead } from '@/decorators/with-head';
import { withAuthLayout } from '@/decorators/with-auth-layout';

const StoresPage: FC = () => {
  return (
    <>
      Stores page
    </>
  );
};

export default compose(
  withHead('Stores'),
  withAuthLayout,
)(StoresPage);
