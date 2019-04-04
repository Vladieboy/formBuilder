import axios from 'axios';

const register = payload => {
 const config = {
     url: '/api/Account/Register',
     method: 'POST',
     data: payload
 }
 return axios(config)
}
const logIn = payload => {
 const config = {
     url: 'http://localhost:7043/Token',
     method: 'POST',
     data: payload,
     headers: {"Content-Type": "application/x-www-form-urlencoded"}
 }
 return axios(config)
}
const getCurrent = tokenKey => {
 const config = {
     url: '/api/Account/UserInfo',
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
window.sessionStorage.removeItem("tokenKey");
}

export {register, getCurrent, logOut, logIn}