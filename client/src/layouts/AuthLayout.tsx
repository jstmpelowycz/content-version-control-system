import { FC, PropsWithChildren } from 'react';
import { Header } from '@/widgets/header/Header';

export const AuthLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
