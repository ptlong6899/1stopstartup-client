import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import AlertMsg from "./components/AlertMsg";
import CreateVendor from "./pages/CreateVendor";
import VendorsPage from "./pages/VendorsPage";
import { useDispatch, useSelector } from "react-redux";
import authActions from "./redux/actions/auth.actions";
import TestPage from "./pages/TestPage";
import index from "./pages/index";
import VendorDetailPage from "./pages/VendorDetailPage";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken.startsWith("Bearer ")) {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);
  return (
    <Router>
      {/* <PublicNavbar /> */}
      <AlertMsg />
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/vendors" component={VendorsPage} />
        <Route exact path="/vendors/:id" component={VendorDetailPage} />
        <Route exact path="/vendor/add" component={CreateVendor} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/test" component={TestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
