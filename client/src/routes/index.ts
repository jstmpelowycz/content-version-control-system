export const ROUTES = {
  home: "/",
  signIn: "/sign-in/",
  signUp: "/sign-up/",
  products: "/products/",
};

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
