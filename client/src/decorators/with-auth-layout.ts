import { makeHoc } from '@/decorators/make-hoc';
import { AuthLayout } from '@/layouts/auth-layout';

export const withAuthLayout = makeHoc(AuthLayout);
