import { FC, PropsWithChildren } from 'react';

export const makeHoc = <P extends PropsWithChildren = PropsWithChildren>(
  Wrapper: FC<PropsWithChildren>,
) => {
  return (Wrappee: FC<P>) => {
    const WithWrapper: FC<P> = (props) => {
      return Wrapper({
        children: Wrappee(props),
      });
    };

    return WithWrapper;
  };
};
