export const ROUTES = {
  home: '/',
  signIn: '/sign-in/',
  signUp: '/sign-up/',
  products: '/products/',
  stores: '/stores/',
};

export const AUTH_ROUTES = [
  ROUTES.signUp,
  ROUTES.signIn,
];

export const PROTECTED_ROUTES = Object.values(ROUTES).filter((route) => (
  route !== ROUTES.signUp
  && route !== ROUTES.signIn
));

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
