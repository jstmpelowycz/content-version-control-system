import { API_URL } from '@/api/constants/global';

export const resolveEndpointUrl = (route: string) => {
  return `${API_URL}${route}`;
};
