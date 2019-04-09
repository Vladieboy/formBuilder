import React, { useState, useEffect } from "react";
import * as userService from "../../services/userService";
// import { saveState } from "../../localStorage";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Container, Row, Col } from "reactstrap";
import {setLogin} from "../../actions/userActions"

import {connect} from 'react-redux'


const Login = props => {
  const [userData, setUserData] = useState([{ email: "", password: "" }]);

  const handleValidSubmit = (event, values) => {
    console.log("event", event, "values", values);
    setUserData(values);
  };

  const handleInvalidSubmit = (event, errors, values) => {
    console.log(errors);
  };


  const handleLogin = () => {
    var details = {
      grant_type: "password",
      username: userData.email,
      password: userData.password
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    userService
      .login(formBody)
      .then(onLoginSuccess)
      .catch();
  };

  const onLoginSuccess = (resp) => {
    debugger
    console.log(resp.data)
    console.log(props)
    // props.handler(resp.data)
    setLogin(resp.data)
  }

  useEffect(() => {
    handleLogin();
  });

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3>Login</h3>
          <AvForm
            onValidSubmit={handleValidSubmit}
            onInvalidSubmit={handleInvalidSubmit}
          >
            <AvField name="email" label="Email Address" type="email" required />
            <AvField
              name="password"
              label="Password"
              type="password"
              required
            />
            <Button color="primary">Submit</Button>
          </AvForm>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps =(state) => {
  return {
    user: state.userData
  };
};


export default connect(mapStateToProps, null)(Login);
