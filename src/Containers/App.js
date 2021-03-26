import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "../Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
