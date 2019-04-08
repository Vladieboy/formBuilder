import React, {useState, useEffect} from "react";

import { withRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import routes from "../src/routes";
import Navbar from "./components/navbar/Navbar"
import FormBuilder from "./components/forms/formBuilder"
import Login from "./components/login/loginPage"



const App = props => {

  const [isAuthorized, setIsAuthorized] = useState(true);
const [userInfo, setUserInfo] = useState('')

const handleRespData = (data) => {
  console.log(data)
  

}


  const getRoutes = routes => {
    return routes.map((r, key) => {
      return <Route path={r.path} component={r.component} key={key}/>;
    });
  };

  const getAuthUser = () => {
    return (<div>
    <Switch>{getRoutes(routes)}</Switch>
      </div>)
  };

  return <>
  {isAuthorized ? <Navbar /> : null}

  {isAuthorized ? getAuthUser() : (
    <>
    <Link to="/login" >Log in</Link>
    <Route path="/login" component={Login} handler={handleRespData}/>
    </>

  )}
 
  </>;
};

export default withRouter(App);
