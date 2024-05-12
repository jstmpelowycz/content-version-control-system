import { RegisterUserFormData, RegisterUserRequestBody } from '@/components/sign-up-form/types';
import { FIELD_NAMES } from '@/components/sign-up-form/constants';

export const mapFormDataToRequestBody = (data: FormData): RegisterUserRequestBody => {
  const { firstName, lastName, ...rest } = Object.keys(FIELD_NAMES).reduce((accum, name) => ({
    ...accum,
    [name]: data.get(name),
  }), {} as RegisterUserFormData);

  return {
    ...rest,
    fullName: `${firstName} ${lastName}`,
  };
};
