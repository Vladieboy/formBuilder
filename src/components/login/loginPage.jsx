import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Container, Row, Col } from "reactstrap";

const Login = props => {
  function handleValidSubmit(event, values) {
    this.setState({ email: values.email });
  }

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
