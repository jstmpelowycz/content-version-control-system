import { FC } from "react";
import { ROUTES } from "@/routes";
import { NavigationItem, NavigationItemProps } from "@/widgets/navigation-item";
import { Home as IconHome, ShoppingBasket as IconBasket } from '@mui/icons-material';
import styles from "./Header.module.css";

export const NAVIGATION_ITEMS: NavigationItemProps[] = [
  {
    icon: <IconHome />,
    title: "Home",
    route: ROUTES.home,
  },
  {
    icon: <IconBasket />,
    title: "Products",
    route: ROUTES.products,
  },
];

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem key={item.route} {...item} />
      ))}
    </div>
  );
};
