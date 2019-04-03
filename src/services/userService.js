import axios from 'axios';

let rootPath = "/api/Account";


const login = payload => {
    const config = {
        url: '/token',
        data: payload,
        crossDomain: true,
        withCredentials: true,
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache"
        }
    };
    return axios(config);
}

const logout = token => {
    const config = {
        url: rootPath + "/Logout",
        method: "post",
        data: token,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "bearer " + token
        }
    };
    return axios(config);
};

const register = payload => {
    const config = {
        url: rootPath + "/Register",
        method: "post",
        data: payload,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache"
        }
    };
    return axios(config);
};



export {
    logout,
    login,
    register
};