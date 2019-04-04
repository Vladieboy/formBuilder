import React, {
    useState,
    useEffect
} from "react";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

import * as userService from "../../services/userService"

const Registration = props => {


    const [formData, setFormData] = useState([{ email: '', password: '', confirmPassword: ''}])


    const handleValidSubmit = (event, values) => {
        console.log("event", event, "values", values)
        
        setFormData(values)
      }

      useEffect(() =>{
          registerUser()
      })

      const registerUser = () => {
          userService.register(formData)
      }
    
      const handleInvalidSubmit = (event, errors, values) => {
        console.log(errors)
      }

    return (
        <div>
            <h3>Registration</h3>
        <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
           <AvField name="email" label="Email Address" type="email" value={formData.email}  required  />
           <AvField name="password" label="Password" type="password" value={formData.password}  required />
           <AvField name="confirmPassword" label="Confirm Password" type="password" value={formData.confirmPassword}  required />
          <Button color="primary">Submit</Button>
          {formData.email} {formData.password}
        </AvForm>

   
       
      </div>
    )
}

export default React.memo(Registration);