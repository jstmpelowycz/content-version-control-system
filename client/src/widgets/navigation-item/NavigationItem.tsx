import Link from "next/link";
import { FC, ReactElement } from "react";
import { Typography } from "@mui/material";
import { Route } from "@/routes";
import styles from "./NavigationItem.module.css";

export interface NavigationItemProps {
  icon: ReactElement;
  title: string;
  route: Route;
}

type Props = NavigationItemProps;

export const NavigationItem: FC<Props> = (props) => {
  const { icon, title, route } = props;

  return (
    <div className={styles.container}>
      {icon}

      <Link href={route}>
        <Typography>{title}</Typography>
      </Link>
    </div>
  );
};
