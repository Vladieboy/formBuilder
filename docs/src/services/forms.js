import axios from 'axios'

const addVacation = payload => {
    const tokenKey = sessionStorage.getItem("tokenKey")
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

export {addVacation}