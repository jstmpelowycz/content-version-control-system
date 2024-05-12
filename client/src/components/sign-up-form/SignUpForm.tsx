import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { FIELD_NAMES } from '@/components/sign-up-form/constants';
import { ROUTES } from '@/routes';
import { useSubmitSignUpForm } from '@/components/sign-up-form/use-submit-sign-up-form';

import * as sx from './SignUpForm.styles';

export const SignUpForm: FC = () => {
  const handleSubmit = useSubmitSignUpForm();

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
          <Grid item xs={12} sm={6}>
            <TextField
              id={FIELD_NAMES.firstName}
              name={FIELD_NAMES.firstName}
              label="First name"
              autoComplete="given-name"
              required
              fullWidth
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id={FIELD_NAMES.lastName}
              name={FIELD_NAMES.lastName}
              label="Last name"
              autoComplete="family-name"
              required
              fullWidth
            />
          </Grid>

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

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          sx={sx.submitButton}
          variant="contained"
          fullWidth
        >
          Sign Up
        </Button>

        <Grid container justifyContent="center">
          <Grid item>
            <Link href={ROUTES.signIn} variant="body2">
              Already have an account? Sign in!
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
