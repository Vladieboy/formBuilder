import React, {useState} from "react";
import Vacation from "./vacationForm";
import Marketing from "./marketingForm"
import {FormGroup, Label, Input} from "reactstrap"

const formDisplayContainer = () => {

    const [state, setState] = useState("")

const selectForm = () => {
    return (
        <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" onChange={handleSelect} name="select" id="exampleSelect" >
          <option value="" >Choose Form</option>
          <option value="vacation" >Vacation</option>
          <option value="marketing" >Marketing</option>
        </Input>
      </FormGroup>
    )
}

const handleSelect = (e) => {
setState(e.target.value)
}

const renderForm = () => {
    switch(state) {
        case 'vacation':
        return <Vacation/>;
        case "marketing":
        return <Marketing/>;
        default:
        return null;
    }
}


    return (
        <div>
{selectForm()}
           {renderForm()}
        </div>
    )
}

export default formDisplayContainer