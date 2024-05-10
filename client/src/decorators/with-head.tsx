import Head from 'next/head';
import { makeHoc } from '@/decorators/make-hoc';

export const withHead = (title: string) => {
  return makeHoc((props) => {
    const { children } = props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        {children}
      </>
    )});
};
