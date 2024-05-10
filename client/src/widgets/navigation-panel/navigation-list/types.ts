import { FC } from 'react';
import { Route } from '@/routes';

export interface NavigationItem {
  Icon: FC;
  text: string;
  route: Route;
}
