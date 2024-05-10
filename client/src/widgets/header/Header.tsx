import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

import * as sx from './Header.styles';

export const Header: FC = () => {
  return (
    <>
      <AppBar sx={sx.container}>
        <Toolbar>
          <Typography component="div" variant="h6" noWrap>
            Welcome!
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

