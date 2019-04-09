import React, {useState, useEffect} from 'react';
import * as formService from "../../services/formService"
import { Table, Container, Modal } from 'reactstrap';
import RequestCard from "./RequestCard"
import RequestUpdateCard from './RequestUpdateCard';


const Requests = (props) => {

    const [requests, setRequests] = useState([]);
    const [modal, setModal] = useState(false)
    const [userId, setUserId] = useState()


    

useEffect(() => {
    getRequests()
}, [])



    
const updateRequest = (data) =>{
formService.updateRequests(data).then(onUpdateSuccess).catch(onUpdateError)
}

const onUpdateSuccess = () => {
alert('success')
}

const onUpdateError = () => {
alert('failure')
}

const getRequests = () => {
        formService.pendingRequests().then(onGetRequestSuccess).catch(onGetRequestFailure)
    }

    const displayRequestsPage = (user) => {
        return <RequestCard request={user} key={user.Id} modalRequest={toggle} />
    }

    const onGetRequestSuccess = (resp) => {
setRequests(resp.data)
console.log(resp.data)
    }

    const onGetRequestFailure = (resp, error) => {
console.log(error)
    }

    const toggle = (resp) => {
        setUserId(resp)
        if (modal === true) {
setModal(false)
        } else {
            setModal(true)
        }
        
    }

    return (
        <>
        <Container>
        <h3>Pending Requests</h3>
<Table responsive>
 <thead>
     <tr>
     <th>#</th>
     <th>Email</th>
     <th>Notes</th>
     <th>DateStart</th>
     <th>DateEnd</th>
     <th>Approval</th>
     </tr>
 </thead>
 <tbody>
     {requests.map(displayRequestsPage)}
 </tbody>
</Table>  
</Container>
<Modal
 toggle={toggle}
 isOpen={modal}>
    <RequestUpdateCard update={updateRequest} data={userId} />
</Modal>
</>
    );
}

export default Requests