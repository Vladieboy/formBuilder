import React from 'react';
import {Button} from "reactstrap"

const Dash = (props) => {

    return(
        <div>
            <Button href="/vacationForm" color="primary"><div>Request Paid Time Off</div> 
            <div>+</div></Button>
            <br></br>
            <Button href="/pending" color="primary"><div>View Pending Requests</div> 
            <div>+</div></Button>
        </div>
    )

}

export default Dash;