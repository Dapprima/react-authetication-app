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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={(e) => props.submitHandler(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={props.user.email}
            onChange={(e) => props.onChangeHandler(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            InputProps={{ inputProps: { minLength: 8 } }}
            id="password"
            autoComplete="current-password"
            value={props.user.password}
            onChange={(e) => props.onChangeHandler(e)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/registry" variant="body2">
                {"Don't have an account?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};
export default Login;
