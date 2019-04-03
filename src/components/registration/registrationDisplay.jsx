import React, {
    useState,
    useEffect
} from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

import * as userService from "../../services/userService"

const Registration = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleValidSubmit = (event, values) => {
        console.log("event", event, "values", values)
        setEmail(values.email);
        setPassword(values.password);
        setConfirmPassword(values.confirmPassword);
      }
    
      const handleInvalidSubmit = (event, errors, values) => {
        console.log(errors)
      }

    return (
        <div>
            <h3>Registration</h3>
        <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
           <AvField name="email" label="Email Address" type="email" value={email} required  />
           <AvField name="password" label="Password" type="password" value={password} required />
           <AvField name="confirmPassword" label="Confirm Password" type="password" value={confirmPassword} required /> */}
          <Button color="primary">Submit</Button>
          {email}
        </AvForm>

   
       
      </div>
    )
}

export default React.memo(Registration);