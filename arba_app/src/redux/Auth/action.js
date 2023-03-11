import * as types from "./actionTypes"

let getUserLogin = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()).then((res) => {
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.token })

    }).catch((err) => {
        console.log(err)
        dispatch({ type: types.LOGIN_FAILE })

    })
}
export { getUserLogin }