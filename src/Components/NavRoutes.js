import React from "react";
import Home from "./Home";
import Main from "./Main";
import { BrowserRouter, Route } from "react-router-dom";

const NavRoutes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Main" component={Main} />
    </div>
  );
};

export default NavRoutes;
