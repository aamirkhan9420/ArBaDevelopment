import * as types from "./actionTypes"

let initailState = {
    products: [],
    cart: [],
    isLoading: false,
    isErr: false
}
let reducer = (oldState = initailState, action) => {
    let { type, payload } = action
   
    switch (type) {
        // ---------------------------Getproductstart-----------------//

        case types.GET_PRODUCTS_REQUEST:
            return { ...oldState, isLoading: true }
        case types.GET_PRODUCTS_SUCCESS:
            return { ...oldState, isLoading: false, isErr: false, products: payload }
        case types.GET_PRODUCTS_FAILE:
            return { ...oldState, isLoading: false, isErr: true, products: [] }
        // ---------------------------GetproductsEnd------------------//

        // ---------------------------PostCartstart-----------------//

        case types.POST_CART_REQUEST:
            return { ...oldState, isLoading: true }
        case types.POST_CART_SUCCESS:
            return { ...oldState, isLoading: false, isErr: false, cart: payload }
        case types.POST_CART_SUCCESS:
            return { ...oldState, isLoading: false, isErr: true, cart: [] }
        // ---------------------------PostCartEnd------------------//
        // ---------------------------GetCartstart-----------------//

        case types.GET_CART_REQUEST:
            return { ...oldState, isLoading: true }
        case types.GET_CART_SUCCESS:
            return { ...oldState, isLoading: false, isErr: false, cart: payload }
        case types.GET_CART_FAILE:
            return { ...oldState, isLoading: false, isErr: true, cart: [] }
        // ---------------------------GetCartEnd------------------//
        // ---------------------------CartQuantitystart-----------------//

        case types.PATCH_CARTQUANTITY_REQUEST:
            return { ...oldState, isLoading: true }
        case types.PATCH_CARTQUANTITY_SUCCESS:
            return { ...oldState, isLoading: false, isErr: false, cart: payload }
        case types.PATCH_CARTQUANTITY_FAILE:
            return { ...oldState, isLoading: false, isErr: true, cart: [] }
        // ---------------------------CartQuantityend------------------//

         // ---------------------------DeleteCartstart-----------------//

         case types.DELETE_CART_REQUEST:
            return { ...oldState, isLoading: true }
        case types.DELETE_CART_SUCCESS:
            return { ...oldState, isLoading: false, isErr: false, cart: payload }
        case types.DELETE_CART_FAILE:
            return { ...oldState, isLoading: false, isErr: true, cart: [] }
        // ---------------------------DeleteCartyend------------------//
        default:
            return oldState;
    }
}
export { reducer }