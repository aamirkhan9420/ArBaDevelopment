import * as types from "./actionTypes"
let initailState = {
    isAuth: JSON.parse(localStorage.getItem('isAuth')) || false,
    token: "",
    isAuthLoading: false,
    isAuthErr: false,
}
let reducer = (oldState = initailState, action) => {
    let { type, payload } = action
    switch (type) {

        case types.LOGIN_REQUEST: return { ...oldState, isAuthLoading: true }
        case types.LOGIN_SUCCESS:
            // localStorage.setItem("token", payload)
            localStorage.setItem("isAuth", true)

            return { ...oldState, isAuthLoading: false, isAuthErr: false, token: payload, isAuth: true }
        case types.LOGIN_FAILE: return { ...oldState, isAuthLoading: false, isAuthErr: true, token: "", isAuth: false }

        default:
            return oldState;
    }
}
export { reducer }