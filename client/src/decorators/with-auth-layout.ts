import { makeHoc } from '@/decorators/make-hoc';
import { AuthLayout } from '@/layouts/auth-layout/AuthLayout';

export const withAuthLayout = makeHoc(AuthLayout);
