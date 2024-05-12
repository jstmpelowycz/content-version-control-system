import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { useSubmitSignInForm } from '@/components/sign-in-form/use-submit-sign-in-form';
import { FIELD_NAMES } from '@/components/sign-in-form/constants';
import { ROUTES } from '@/routes';

import * as sx from './SignInForm.styles';

export const SignInForm: FC = () => {
  const handleSubmit = useSubmitSignInForm();

  return (
    <Box sx={sx.container}>
      <Avatar sx={sx.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Sign up
      </Typography>

      <Box
        sx={sx.formContainer}
        component="form"
        noValidate
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id={FIELD_NAMES.email}
              name={FIELD_NAMES.email}
              label="Email address"
              autoComplete="email"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id={FIELD_NAMES.password}
              name={FIELD_NAMES.password}
              label="Password"
              type="password"
              autoComplete="new-password"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          sx={sx.submitButton}
          variant="contained"
          fullWidth
        >
          Sign In
        </Button>

        <Grid container justifyContent="center">
          <Grid item>
            <Link href={ROUTES.signUp} variant="body2">
              Do not have an account yet? Sign up!
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
