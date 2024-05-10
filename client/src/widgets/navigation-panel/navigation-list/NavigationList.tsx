import { FC } from 'react';
import Link from 'next/link';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NAVIGATION_ITEMS } from '@/widgets/navigation-panel/navigation-list/constants';

export const NavigationList: FC = () => {
  return (
    <List>
      {NAVIGATION_ITEMS.map(({ Icon, text, route }) => (
        <Link key={route} href={route}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
