import { Alert, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user,  isLoading, error, registerNewUser } = useAuth()
    console.log(user)
    const history = useHistory();

  const handleOnBlur = (e) => {
    const textField = e.target.name;
    const inputValue = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[textField] = inputValue;
    setRegisterData(newRegisterData);
    console.log(registerData);
  };
  const handleOnSubmit = (e) => {
    if (registerData.password1 !== registerData.password2) {
      alert("Your password did not match");
      return;
    }
      registerNewUser(registerData.email, registerData.password1, registerData.name, history)
      console.log(registerData)
    e.preventDefault();
  };

  return (
    <Container>
      <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
        Register
      </Typography>
      {!isLoading && (
        <form onSubmit={handleOnSubmit}>
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="Your Name"
            name="name"
            onBlur={handleOnBlur}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            onBlur={handleOnBlur}
            id="filled-password-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            onBlur={handleOnBlur}
            id="filled-password-input"
            label="Password"
            type="password"
            name="password1"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            onBlur={handleOnBlur}
            id="filled-password-input"
            label="Re-Type Password"
            type="password"
            name="password2"
            autoComplete="current-password"
            variant="filled"
          />
          <Button sx={{ width: "50%", m: 1 }} type="submit" variant="contained">
            Register
          </Button>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button sx={{ width: "50%" }} variant="text">
              Already Registered? Please Login
            </Button>
          </NavLink>
        </form>
      )}
      {isLoading && <CircularProgress />}
      {user?.email && (
        <Alert severity="success">User Created successfully!</Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
};

export default Register;
