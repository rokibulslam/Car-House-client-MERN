import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddProduct from "../AddProduct/AddProduct";
import MyOrders from "../MyOrders/MyOrders";
import ManageOllOrders from "../ManageAllOrders/ManageOllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Review from "../Review/Review";
const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <NavLink style={{ textDecoration: "none" }} to="/Home">
            <Button variant="text" style={{ color: "inherit" }}>
              Home
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={{ textDecoration: "none" }} to="/showroom">
            <Button variant="text" style={{ color: "inherit" }}>
              Showroom
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/review`}>
            <Button variant="text" style={{ color: "inherit" }}>
              Review
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/myOrders`}>
            <Button variant="text" style={{ color: "inherit" }}>
              My Orders
            </Button>
          </NavLink>
        </ListItem>
        {admin && (
          <Box>
            <ListItem>
              <NavLink style={{ textDecoration: "none" }} to="/purchase">
                <Button variant="text" style={{ color: "inherit" }}>
                  Add an Admin
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`${url}/addProduct`}
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Add a Product
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`${url}/manageProducts`}
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Manage Products
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`${url}/manageOrders`}
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Manage All Orders
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`${url}/adminCreate`}
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Make An Admin
                </Button>
              </NavLink>
            </ListItem>
          </Box>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/manageOrders`}>
            <ManageOllOrders></ManageOllOrders>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/adminCreate`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
