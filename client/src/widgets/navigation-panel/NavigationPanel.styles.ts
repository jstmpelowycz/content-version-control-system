import { SxProps } from '@mui/material';
import { PANEL_WIDTH } from '@/styles/constants';

export const drawer: SxProps = {
  width: `${PANEL_WIDTH}px`,
  flexShrink: 0,

  '& .MuiDrawer-paper': {
    width: `${PANEL_WIDTH}px`,
  },
};
