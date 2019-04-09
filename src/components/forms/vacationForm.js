import React, {useState} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

import { AvForm, AvField } from "availity-reactstrap-validation";

import * as formService from "../../services/formService"

import "react-datepicker/dist/react-datepicker.css";


const VacationForm = (props) =>{
 

const [vacationFormData, setVacationFormData] = useState(
    {name: '', notes:'', startDate: '', endDate: ''}
)


const handleValidSubmit = (event, values) => {
    console.log("event", event, "values", values);
    // console.log(startDate)
    setVacationFormData(values.email, values.userId, values.notes)
    saveToDB(values)
  };

const saveToDB = (values) => {

    let obj = {
      Id: 0,
      Name: values.email,
      Data: values.notes,
      DateStart: values.startDate,
      DateEnd: values.endDate
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
            <h3>Vacation Form</h3>
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
                name="notes"
                label="Notes"
                type="textarea"
                value={vacationFormData.notes}
                required
              />
              <AvField
              name="startDate"
              label="StartDate"
              type="date"
              value={vacationFormData.startDate}
              required
              />
              <AvField
              name="endDate"
              label="endDate"
              type="date"
              value={vacationFormData.endDate}
              required
              />
              <Button color="primary">Submit</Button>
              {vacationFormData.email}
            </AvForm>
          </Col>
        </Row>
      </Container>
    )
}

export default VacationForm