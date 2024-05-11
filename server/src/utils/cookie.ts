import { Response } from 'express';

export const setJwtTokenToCookie = (response: Response, token: string) => {
  response.cookie('jwt', token, {
    httpOnly: true,
    path: '/',
  });
};
