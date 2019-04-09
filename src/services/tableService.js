import axios from "axios";

const getAllUsers = () => {
    const config = {
        url: "api/tests/auth/get",
        method: "get",
        headers: {
            "Content-Type": "application/JSON",
            "Cache-Control": "no-cache"
        }
    };
    return axios(config);
}

// const getAllRoles = () => {
//     const config = {
//         url: "api/tests/auth/getRoles",
//         method: "get",
//         headers: {
//             "Content-Type": "application/JSON",
//             "Cache-Control": "no-cache"
//         }
//     };
//     return axios(config);
// }

export {getAllUsers}