import { EndpointRouteName, ENDPOINTS } from '@/api/constants/endpoints';
import { DEFAULT_HEADERS } from '@/api/constants/headers';
import { resolveEndpointUrl } from '@/api/utils/resolve-endpoint-url';

export const makeRequest = async <T extends object>(
  name: EndpointRouteName,
  body?: object,
): Promise<T> => {
  const { route, method } = ENDPOINTS[name];
  const resolvedUrl = resolveEndpointUrl(route);

  const response = await fetch(resolvedUrl, {
    method,
    mode: 'cors',
    headers: DEFAULT_HEADERS,
    ...(body && {
      body: JSON.stringify(body),
    }),
  });

  const data = await response.json();

  return data as T;
};
