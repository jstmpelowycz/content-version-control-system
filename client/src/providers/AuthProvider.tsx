import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { User } from '@/types/user';

interface Context {
  user: User | null;
}

const AuthContext = createContext<Context>({
  user: null,
});

export const AuthProvider: FC<PropsWithChildren<Context>> = (props) => {
  const { user, children } = props;

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUserContext = () => useContext(AuthContext);
