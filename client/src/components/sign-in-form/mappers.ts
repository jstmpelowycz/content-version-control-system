import { FIELD_NAMES } from '@/components/sign-up-form/constants';
import { LoginUserRequestBody } from '@/components/sign-in-form/types';

export const mapFormDataToRequestBody = (data: FormData): LoginUserRequestBody => {
  return Object.keys(FIELD_NAMES).reduce((accum, name) => ({
    ...accum,
    [name]: data.get(name),
  }), {} as LoginUserRequestBody);
};
