import React from "react"

const RequestCard = (props) => {


const onUserClicked = () => {
    props.modalRequest(props.request.Id)
}

    return(
        <tr onClick={onUserClicked}>
            <td>{props.request.Id}</td>
            <td>{props.request.Name}</td>
            <td>{props.request.Notes}</td>
            <td>{props.request.DateStart}</td>
            <td>{props.request.DateEnd}</td>
            <td>{props.request.IsApproved}</td>
        </tr>
    )
}

export default RequestCard