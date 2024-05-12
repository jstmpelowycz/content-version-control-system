import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

export const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`Copyright © Content VCS ${new Date().getFullYear()}.`}
    </Typography>
  );
};
