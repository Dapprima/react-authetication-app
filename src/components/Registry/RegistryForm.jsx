import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Registry = (props) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registry
        </Typography>
        <form className={classes.form} onSubmit={(e) => props.submitHandler(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value={props.user.firstName}
                label="First Name"
                autoFocus
                onChange={(e) => props.onChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                value={props.user.lastName}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => props.onChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={props.user.email}
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => props.onChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                InputProps={{ inputProps: { minLength: 8 } }}
                value={props.user.password}
                autoComplete="current-password"
                onChange={(e) => props.onChangeHandler(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};
export default Registry;
