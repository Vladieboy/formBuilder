import React from "react"

const RequestCard = (props) => {


const onUserClicked = () => {
    props.modalRequest(props.request.Id)
}

    return(
        <tr onClick={onUserClicked}>
            <td>{props.request.Id}</td>
            <td>{props.request.Name}</td>
            <td>{props.request.Data}</td>
            <td>{(props.request.DateStart).slice(0,10)}</td>
            <td>{(props.request.DateEnd).slice(0,10)}</td>
            <td>{((props.request.IsApproved == null) ? "pending" : "completed" )}</td>
        </tr>
    )
}

export default RequestCard