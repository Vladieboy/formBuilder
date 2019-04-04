import React, {
    useState,
    useEffect
} from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import * as userService from "../../services/userService"
import {saveState, loadState} from '../../localStorage'

const Login = props => {

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
        .login(formBody).then(saveState(details))
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