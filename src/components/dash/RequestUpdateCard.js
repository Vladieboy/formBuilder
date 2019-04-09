import React from 'react';
import {Button, Col, Row }from "reactstrap"

const RequestUpdateCard = (props) => {
    
const updateValue = (value) => {
    // console.log(value, props.data)
    let obj = {Id: props.data, isApproved: value}
    props.update(obj)
}





    return (
        <div>
           <br/>
           <Row>

           <Col  xs="6" sm="4">

           <Button  onClick={e=> updateValue(1, e)} color="primary"> Accept Request </Button>
           </Col>
          
<Col xs="6" sm="4">

           <Button onClick={e=> updateValue(0, e)} color="danger"> Reject Request </Button>
</Col>
           <br/>
           <br/>

           </Row>
        </div>
    )
}

export default RequestUpdateCard