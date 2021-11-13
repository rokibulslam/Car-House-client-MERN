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
import Payment from "../Payment/Payment";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStore, faStar, faShoppingBag, faCartPlus, faTasks, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {faAmazonPay} from "@fortawesome/free-brands-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
const drawerWidth = 300;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, logout, user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      
      <List>
        <ListItem sx={{ color: "error.main", fontWeight: 600 }}>
          {admin && (
            <Typography variant="h6" noWrap component="div">
              Admin: {admin?.displayName}
            </Typography>
          )}
          {!admin && (
            <Typography variant="h6" noWrap component="div">
             User: {user?.displayName}
            </Typography>
          )}
        </ListItem>
        <ListItem>
          <NavLink style={{ textDecoration: "none" }} to="/Home">
            <Button variant="text" style={{ color: "inherit" }}>
              <FontAwesomeIcon
                style={{ paddingRight: "10px" }}
                icon={faHome}
                size="2x"
              />
              Home
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={{ textDecoration: "none" }} to="/showroom">
            <Button variant="text" style={{ color: "inherit" }}>
              <FontAwesomeIcon
                style={{ paddingRight: "10px" }}
                icon={faStore}
                size="2x"
              />
              Vehicles
            </Button>
          </NavLink>
        </ListItem>
        {!admin && (
          <Box>
            <ListItem>
              <NavLink style={{ textDecoration: "none" }} to={`${url}/review`}>
                <Button variant="text" style={{ color: "inherit" }}>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faStar}
                    size="2x"
                  />
                  Review
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink style={{ textDecoration: "none" }} to={`${url}`}>
                <Button variant="text" style={{ color: "inherit" }}>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faShoppingBag}
                    size="2x"
                  />
                  My Orders
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink style={{ textDecoration: "none" }} to={`${url}/payment`}>
                <Button variant="text" style={{ color: "inherit" }}>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faAmazonPay}
                    size="2x"
                  />
                  Payment
                </Button>
              </NavLink>
            </ListItem>
          </Box>
        )}
        {admin && (
          <Box>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`${url}/addProduct`}
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faCartPlus}
                    size="2x"
                  />
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
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faTasks}
                    size="2x"
                  />
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
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faTasks}
                    size="2x"
                  />
                  Manage All Orders
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink style={{ textDecoration: "none" }} to={`${url}`}>
                <Button variant="text" style={{ color: "inherit" }}>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faUser}
                    size="2x"
                  />
                  Make An Admin
                </Button>
              </NavLink>
            </ListItem>
          </Box>
        )}
        <ListItem>
          <Button onClick={logout} variant="text" sx={{color: 'text.primary'}}>
            <FontAwesomeIcon
              style={{ paddingRight: "10px" }}
              icon={faSignOutAlt}
              size="2x"
            />{" "}
            LogOut
          </Button>
        </ListItem>
      </List>
    </Box>
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
          bgcolor: "text.primary",
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
          {admin && (
            <Typography variant="h6" noWrap component="div">
              Admin DashBoard
            </Typography>
          )}
          {!admin && (
            <Typography variant="h6" noWrap component="div">
              Customer DashBoard
            </Typography>
          )}
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
          {admin ? (
            <Route exact path={`${path}`}>
              <MakeAdmin></MakeAdmin>
            </Route>
          ) : (
            <Route exact path={`${path}`}>
              <MyOrders></MyOrders>
            </Route>
          )}

          <Route path={`${path}/manageOrders`}>
            <ManageOllOrders></ManageOllOrders>
          </Route>

          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/updateProduct/:id`}>
            <UpdateProduct></UpdateProduct>
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
