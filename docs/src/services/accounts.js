import axios from 'axios';


const prefix = "http://localhost:10047"

const register = payload => {
 const config = {
     url: 'http://localhost:10047/api/Account/Register',
     method: 'POST',
     data: payload,
     headers: {"Content-Type" : "application/json"}
 }
 return axios(config)
}
const logIn = payload => {
const tokenKey = sessionStorage.getItem("tokenKey")
 const config = {
     url: 'http://localhost:10047/Token',
     method: 'post',
     data: payload,
     headers: {"Content-Type": "application/x-www-form-urlencoded", "cache-control" : "no-cache", "Authorization" : `Bearer ${tokenKey}`}
 }
 return axios(config)
}
const getCurrent = () => {
    const tokenKey = sessionStorage.getItem("tokenKey")
 const config = {
     url: `${prefix}/api/Account/UserInfo`,
     method: 'GET',
     headers: {"Authorization" : `Bearer ${tokenKey}`}
 }
 return axios(config)
}
const logOut = () => {
//  const config = {
//      url: '/api/Account/Register',
//      method: 'POST',
//      data: payload
//  }
//  return axios(config)
sessionStorage.removeItem("tokenKey");
}

export {register, getCurrent, logOut, logIn}