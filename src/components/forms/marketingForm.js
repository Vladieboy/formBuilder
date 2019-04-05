import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import DatePicker from "react-datepicker";
import { AvForm, AvField } from "availity-reactstrap-validation";

import * as formService from "../../services/formService"

import "react-datepicker/dist/react-datepicker.css";


const VacationForm = (props) =>{
 

const [vacationFormData, setVacationFormData] = useState(
    {name: '', userId: '', notes:''}
)

const [startDate, setStartDate] = useState();
const [endDate, setEndDate] = useState();

const handleEndChange = (value) => {
console.log(value)
setEndDate(value)
}


const handleStartChange = (value) => {
console.log(value)
setStartDate(value)
}

const handleValidSubmit = (event, values) => {
    console.log("event", event, "values", values);
    console.log(startDate, endDate)
    setVacationFormData(values.email, values.userId, values.notes)
    saveToDB(values)
  };

const saveToDB = (values) => {
    debugger;
    console.log(startDate, endDate, values)

    let obj = {
      Id: 0,
      Name: values.email,
      UserId: values.UserId,
      Notes: values.notes,
      DateStart: startDate,
      DateEnd: endDate
    }
    formService.createForm(obj)
}

  const handleInvalidSubmit = (event, errors, values) => {
    console.log(errors);
  };

    return (
        <Container fluid>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3>Marketing Form</h3>
            <AvForm
              onValidSubmit={handleValidSubmit}
              onInvalidSubmit={handleInvalidSubmit}
            >
              <AvField
                name="email"
                label="Email Address To Contact You At"
                type="email"
                value={vacationFormData.name}
                required
              />
              <AvField
                name="UserId"
                label="UserId"
                type="number"
                value={vacationFormData.userId}
                required
              />
              <AvField
                name="notes"
                label="Notes"
                type="textarea"
                value={vacationFormData.notes}
                required
              />
              <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input
            type="datetime"
            name="startDate"
            id="startDate"
            placeholder="startDate placeholder"
          />
             {/* <DatePicker dateFormat="YYYY-MM-DD" name="startDate" select={startDate} onChange={handleStartChange} /> */}
             </FormGroup>
             <FormGroup>
             <Label for="endDate" >End Date</Label>
             <Input
            type="datetime"
            name="endDate"
            id="endDate"
            placeholder="startDate placeholder"
          />
             </FormGroup>
              <Button color="primary">Submit</Button>
              {vacationFormData.email}
            </AvForm>
          </Col>
        </Row>
      </Container>
    )
}

export default VacationForm