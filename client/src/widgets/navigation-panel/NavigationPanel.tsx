import { FC } from 'react';
import { Drawer } from '@mui/material';
import { NavigationList } from '@/widgets/navigation-panel/navigation-list';

import * as sx from './NavigationPanel.styles';

export const NavigationPanel: FC = () => {
  return (
    <Drawer
      sx={sx.drawer}
      variant="permanent"
      anchor="left"
    >
      <NavigationList />
    </Drawer>
  );
};
