const initialState = {
    account: ""
}

function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                account: action.payload.account,
            }
            break;
        case 'LOGOUT':
            return {
                ...state,
                account: {}
            }
            break;
        default:
            return state;
    }
}

export default AuthReducer;