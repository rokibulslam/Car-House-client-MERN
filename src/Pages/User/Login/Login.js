import { Alert, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Footer/Footer";
import Navigation from "../../Home/Navigation/Navigation";
import './Login.css'
const Login = () => {
  const [loginData, setLoginData] = useState({})
    const { user, error, loginUser, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleLoginField = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
     };
    
    const handleLoginOnSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
     };
    
  return (
    <div className="register">
      <Navigation></Navigation>
      <Container className="form-banner">
        <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
          Login Here
        </Typography>
        <form onSubmit={handleLoginOnSubmit}>
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            onBlur={handleLoginField}
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
            onBlur={handleLoginField}
            id="filled-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            variant="filled"
          />
          <Button sx={{ width: "50%", m: 1 }} type="submit" variant="contained">
            Login
          </Button>
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button sx={{ width: "50%" }} variant="text">
              New User? Please Register
            </Button>
          </NavLink>
          <br />
          {isLoading && <CircularProgress />}
          {/* {user?.email && <Alert severity="success">Login successfully!</Alert>} */}
          {error && <Alert severity="error">{error}</Alert>}
        </form>
      </Container>
      
    </div>
  );
};

export default Login;
