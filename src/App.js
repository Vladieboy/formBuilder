import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import routes from "../src/routes";

import Registration from "./components/registration/registrationDisplay";

const App = props => {
  const getRoutes = routes => {
    return routes.map((r, key) => {
      return <Route path={r.path} component={r.component} key={key} />;
    });
  };

  const getAuthUser = () => {
    return <Switch>{getRoutes(routes)}</Switch>;
  };

  return <>{getAuthUser()}</>;
};

export default withRouter(App);
