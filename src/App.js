import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Register from "./Pages/User/Register/Register";
import Login from "./Pages/User/Login/Login";
import Navigation from "./Pages/Home/Navigation/Navigation";
import Purchase from "./Pages/Purchase/Purchase";
import AllCycle from "./Pages/AllCycle/AllCycle";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/login">
              <Login></Login>
            </PrivateRoute>
            <Route path="/showroom">
              <AllCycle></AllCycle>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
