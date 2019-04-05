import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import routes from "../src/routes";
import Navbar from "./components/navbar/Navbar"


const App = props => {
  const getRoutes = routes => {
    return routes.map((r, key) => {
      return <Route path={r.path} component={r.component} key={key} />;
    });
  };

  const getAuthUser = () => {
    return <Switch>{getRoutes(routes)}</Switch>;
  };

  return <>
  <Navbar />
  {getAuthUser()}
  </>;
};

export default withRouter(App);
