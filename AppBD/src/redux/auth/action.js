export function login(account) {
    return {
        type: 'LOGIN',
        account,
    }
}

export function logout() {
    return {
        type: 'LOGOUT',

    }
}