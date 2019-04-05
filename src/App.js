<<<<<<< HEAD
import React, {}from 'react';
import { withRouter } from "react-router-dom";

import Registration from "./components/registration/registrationDisplay"
import Login from "./components/login/loginPage"
import CompanyStructure from "./components/dash/comapnyStructurePage"
import PTO from "./components/dash/myPTO"
import Roles from "./components/dash/rolesPage"
import Requests from "./components/dash/Requests"
=======
import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import routes from "../src/routes";

import Registration from "./components/registration/registrationDisplay";
>>>>>>> master

const App = props => {
  const getRoutes = routes => {
    return routes.map((r, key) => {
      return <Route path={r.path} component={r.component} key={key} />;
    });
  };

<<<<<<< HEAD
  // getAuthRoutes() {

  // }

    return (
      <>
      {/* <CompanyStructure/> */}
      {/* <PTO/>
      <Roles/>
      <Requests/> */}
      {/* <Registration/> */}
      {/* <Login/> */}

    </>
    );
  }
=======
  const getAuthUser = () => {
    return <Switch>{getRoutes(routes)}</Switch>;
  };
>>>>>>> master

  return <>{getAuthUser()}</>;
};

export default withRouter(App);
