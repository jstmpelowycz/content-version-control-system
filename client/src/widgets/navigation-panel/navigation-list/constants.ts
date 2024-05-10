import { Home, ShoppingBasket, Store } from '@mui/icons-material';
import { ROUTES } from '@/routes';
import { NavigationItem } from '@/widgets/navigation-panel/navigation-list/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    Icon: Home,
    text: 'Home',
    route: ROUTES.home,
  },
  {
    Icon: ShoppingBasket,
    text: 'Products',
    route: ROUTES.products,
  },
  {
    Icon: Store,
    text: 'Stores',
    route: ROUTES.stores,
  },
];
