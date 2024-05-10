import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

import * as sx from './ContentLayout.styles';

export const ContentLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Box sx={sx.container}>
      {children}
    </Box>
  );
};
