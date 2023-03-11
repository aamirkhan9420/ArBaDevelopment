import * as types from "./actionTypes"

let initailState = {
    products: [],
    isLoading: false,
    isErr: false
}
let reducer = (oldState=initailState, action) => {
    let { type, payload } = action
    switch (type) {
            // ---------------------------Getproductstart-----------------//

        case types.GET_PRODUCTS_REQUEST:
            return { ...oldState, isLoading: true }
        case types.GET_PRODUCTS_SUCCESS:
            return { ...oldState, isLoading: false, isErr: false, products: payload }
        case types.GET_PRODUCTS_FAILE:
            return { ...oldState, isLoading: false,isErr:true,products:[] }
            // ---------------------------GetproductsEnd------------------//

        default:
           return oldState;
    }
}
export {reducer}