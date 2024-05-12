import { HttpMethod } from '@/api/constants/methods';

export enum EndpointRouteName {
  LOGIN = 'login',
  REGISTER = 'register',
}

interface Endpoint {
  route: typeof ENDPOINT_ROUTES_MAP[EndpointRouteName];
  method: HttpMethod;
}

const ENDPOINT_ROUTES_MAP = {
  [EndpointRouteName.LOGIN]: '/auth/login',
  [EndpointRouteName.REGISTER]: '/auth/register',
};

export const ENDPOINTS: Record<EndpointRouteName, Endpoint> = {
  [EndpointRouteName.LOGIN]: {
    route: ENDPOINT_ROUTES_MAP[EndpointRouteName.LOGIN],
    method: HttpMethod.POST,
  },
  [EndpointRouteName.REGISTER]: {
    route: ENDPOINT_ROUTES_MAP[EndpointRouteName.REGISTER],
    method: HttpMethod.POST,
  },
};
