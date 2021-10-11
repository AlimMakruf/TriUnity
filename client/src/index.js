import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./components/Routes";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

const Main = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute onlyPublic path="/signin" exact component={SignIn} />
        <Profile/>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
