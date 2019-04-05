import axios from 'axios';

const createForm = (payload) => {
    const config = {
        url: "api/forms/insert",
        method: "post",
        data: payload,
        headers: {
            "Content-Type": "application/JSON",
            "Cache-Control": "no-cache"
        }
    }
    return axios(config)
}

const pendingRequests = () => {
    const config = {
        url: "api/forms/select",
        method: "get",
        headers: {
            "Content-Type": "application/JSON",
            "Cache-Control": "no-cache"
        }
    }
    return axios(config)
}


export {createForm, pendingRequests}