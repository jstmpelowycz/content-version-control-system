import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/providers/AuthProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@/styles/main.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const user = {
    id: '1',
    fullName: 'John Doe',
    email: 'john.doe@gmail.com',
  };

  return (
    <AuthProvider user={user}>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
