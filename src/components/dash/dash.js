import React from 'react';
import {Button} from "reactstrap"

const Dash = (props) => {

    return(
        <div>
            <Button href="/fdc" color="primary"><div>Request Paid Time Off</div> 
            <div>+</div></Button>
            <br></br>
            <Button href="/requests" color="primary"><div>View Pending Requests</div> 
            <div>+</div></Button>
        </div>
    )

}

export default Dash;