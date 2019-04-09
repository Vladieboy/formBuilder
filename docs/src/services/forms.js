import axios from 'axios'

const addVacation = payload => {
    const tokenKey = sessionStorage.getItem("tokenKey");
    const config = {
        url: 'http://localhost:10047/api/Forms/create/vacation',
        data: payload,
        method: 'POST',
        headers: {"Content-Type" : 'application/json', "Authorization" : `Bearer ${tokenKey}`}
    }
    return axios(config)
}
const addForm = payload => {
    //const tokenKey = sessionStorage.getItem("tokenKey")
    const config = {
        url: 'http://localhost:10047/api/Forms',
        data: payload,
        method: 'POST',
        //headers: {"Content-Type" : 'application/json', "Authorization" : `Bearer ${tokenKey}`}
    }
    return axios(config)
}

const selectAll = () => {
    const tokenKey = sessionStorage.getItem("tokenKey");

    const config = {
        url:"http://localhost:10047/api/Forms",
        method: "GET",
        headers: { "Authorization" : `Bearer ${tokenKey}` }
    }
    return axios(config);
}

const submitForm = payload => {
    const tokenKey = sessionStorage.getItem("tokenKey");

    const config = {
        url: `http://localhost:10047/api/Forms/${payload.FormId}`,
        method: "POST",
        data: payload,
        headers: {"Authorization" : `Bearer ${tokenKey}`}
    }

    return axios(config);
}

export {addVacation, addForm, selectAll, submitForm}