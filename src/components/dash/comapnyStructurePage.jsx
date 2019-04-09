import React, {useState, useEffect} from 'react';
import { Table, Container } from 'reactstrap';


import * as tableService from "../../services/tableService"

const CompanyStructure = (props) => {

const [tableData, setTableData] = useState([]);


useEffect(() => {
    testTableService()
}, [])

    function testTableService() {
        tableService.getAllUsers().then(onGetAllUsersSuccess)
    }
    
    const onGetAllUsersSuccess = (resp) => {
console.log(resp.data);
setTableData(resp.data)
    }


    return (
        <Container>
            <h3>Users</h3>
  <Table responsive>
     <thead>
         <tr>
         <th>#</th>
         <th>Email</th>
         <th>UserName</th>
         </tr>
     </thead>
     <tbody>
         <tr>
            <td>{tableData.map((r, i) =><tr><td key={i}>{r.Id}</td></tr>)}</td>
            <td>{tableData.map((r, i) => <tr><td key={i}>{r.Email}</td></tr>)}</td>
            <td>{tableData.map((r, i) => <tr><td key={i}>{r.UserName}</td></tr> )}</td> 
            </tr>
     </tbody>
 </Table>  
 </Container>
    )
}

export default CompanyStructure