export function setLogin(name) {
    return {
        type : "SET_LOGIN",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            }, 2000);
    })
};
}