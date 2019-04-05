<<<<<<< HEAD
import React, {
    useState,
    useEffect
} from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import * as userService from "../../services/userService"
import {saveState} from '../../localStorage'
=======
import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Container, Row, Col } from "reactstrap";
>>>>>>> master

const Login = props => {
  function handleValidSubmit(event, values) {
    this.setState({ email: values.email });
  }

<<<<<<< HEAD
const [userData, setUserData] = useState([{email: '', password: ''}])


const handleValidSubmit = (event, values) => {
    console.log("event", event, "values", values)
    setUserData(values)
  }

  const handleInvalidSubmit = (event, errors, values) => {
    console.log(errors)
  }

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
        .login(formBody).then(saveState(details)).catch()
  }

  useEffect(()=> {
    handleLogin()
  })

    return (
        <div>
            <h3>Login</h3>
        <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
           <AvField name="email" label="Email Address" type="email" value={userData.email} required />
           <AvField name="password" label="Password" type="password" value={userData.password} required />
          <Button color="primary">Submit</Button>
        </AvForm>

<button>Register</button>
   
       
      </div>
    )
}

export default Login;
=======
  function handleInvalidSubmit(event, errors, values) {
    this.setState({ email: values.email, error: true });
  }

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

export default Login;
>>>>>>> master
