const userReducer = (state = {
    name: '',
    id: ''
}, action) => {
    switch (action.type) {
        case "SET_LOGIN":
        state = {
            ...state,
            name: action.payload
        };
        break;
    }
    return state;
};

export default userReducer