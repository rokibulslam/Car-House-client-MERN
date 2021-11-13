import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Register from "./Pages/User/Register/Register";
import Login from "./Pages/User/Login/Login";
import Purchase from "./Pages/Purchase/Purchase";
import AllCar from "./Pages/AllCar/AllCar";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Notfound from "./Pages/Notfound/Notfond";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/showroom">
              <AllCar></AllCar>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
