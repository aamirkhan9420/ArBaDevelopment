import * as types from "./actionTypes"

let getProducts = () => (dispatch) => {

    dispatch({ type: types.GET_PRODUCTS_REQUEST })

    fetch("https://fakestoreapi.com/products", {
        method: "GET",

    }).then((res) => res.json()).then((res) => {
    
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res })

    }).catch((err) => {
        console.log(err)
        dispatch({ type: types.GET_PRODUCTS_FAILE })

    })
}
export { getProducts }