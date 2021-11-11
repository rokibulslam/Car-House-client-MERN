import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
  const { user, logout } = useAuth()
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AK Bicycle
            </Typography>
            <NavLink
              to="/appointment"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Appointment</Button>
            </NavLink>
            {user?.email ? (
              <Box>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/dashboard"
                >
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button onClick={logout} color="inherit">
                  Logout
                </Button>
              </Box>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}
            {user?.email ? (
              <p style={{ color: "whitesmoke" }}>{user.displayName}</p>
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;