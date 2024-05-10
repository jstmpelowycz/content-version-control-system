import { makeHoc } from '@/decorators/make-hoc';
import { AuthLayout } from '@/layouts/AuthLayout';

export const withAuthLayout = makeHoc(AuthLayout);
