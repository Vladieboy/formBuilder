import React, { Component } from "react";
import Layout from "./containers/Layout";
import { withRouter, Switch, Route } from "react-router-dom";
import componentList from "./componentList";
import LogIn from "./containers/LogIn";
import Register from "./containers/Register";
import * as userService from "./services/accounts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: true,
      currentUser: {}
    };
  }

  componentDidMount() {
    //this.getCurrentUser();
  }

  getCurrentUser = () => {
    userService
      .getCurrent()
      .then(this.getCurrentOnSuccess)
      .catch(this.getCurrentOnError);
  };
  getCurrentOnSuccess = response => {
    this.setState({
      isAuthorized: true,
      currentUser: response.data
    });
  };
  getCurrentOnError = () => {
    this.props.history.push("/login");
    this.setState({
      isAuthorized: false,
      currentUser: {}
    });
  };
  setAuthorized = () => {
    this.setState(
      {
        isAuthorized: true
      },
      this.props.history.push("/dashboard")
    );
  };
  logOut = () => {
    userService.logOut();
    this.getCurrentUser();
  };
  logOutOnError = response => {
    console.log(response);
  };

  getComponents = (route, index) => {
    return (
      <Route
        key={index}
        {...this.props}
        exact
        path={route.path}
        render={props => <route.component {...props} />}
      />
    );
  };

  getRoutes = () => {
    if (this.state.isAuthorized) {
      return (
        <Layout {...this.props} logOut={this.logOut}>
          <Switch>{componentList.map(this.getComponents)}</Switch>
        </Layout>
      );
    } else {
      return (
        <React.Fragment>
          <Route
            exact
            path="/login"
            render={props => (
              <LogIn {...props} setAuthorized={this.setAuthorized} />
            )}
          />
          <Route
            exact
            path="/register"
            render={props => <Register {...props} />}
          />
        </React.Fragment>
      );
    }
  };

  render() {
    return this.getRoutes();
  }
}

export default withRouter(App);
