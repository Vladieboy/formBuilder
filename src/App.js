import React, {}from 'react';
import { withRouter } from "react-router-dom";

import Registration from "./components/registration/registrationDisplay"
import Login from "./components/login/loginPage"
import CompanyStructure from "./components/dash/comapnyStructurePage"
import PTO from "./components/dash/myPTO"
import Roles from "./components/dash/rolesPage"
import Requests from "./components/dash/Requests"

const App = props => {

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


export default withRouter(App);
