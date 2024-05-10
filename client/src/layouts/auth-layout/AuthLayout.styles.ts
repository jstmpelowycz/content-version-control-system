import { SxProps } from '@mui/material';
import { PANEL_WIDTH } from '@/styles/constants';

export const container: SxProps = {
  display: 'flex',
};

export const content: SxProps = {
  width: `calc(100vw - ${PANEL_WIDTH}px)`,
};
