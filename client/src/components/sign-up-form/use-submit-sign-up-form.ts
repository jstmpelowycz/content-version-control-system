import { FormEvent, useCallback } from 'react';
import { EndpointRouteName } from '@/api/constants/endpoints';
import { makeRequest } from '@/api/utils/make-request';
import { mapFormDataToRequestBody } from '@/components/sign-up-form/mappers';

export const useSubmitSignUpForm = () => {
  return useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = mapFormDataToRequestBody(data);

    await makeRequest(EndpointRouteName.REGISTER, {
      email: body.email,
      password: body.password,
      fullName: body.fullName,
    });
  }, []);
};
