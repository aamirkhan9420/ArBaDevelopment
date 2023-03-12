import * as types from "./actionTypes"

let getProducts = (number) => (dispatch) => {

    dispatch({ type: types.GET_PRODUCTS_REQUEST })

    fetch(`https://fakestoreapi.com/products?limit=${number}`, {
        method: "GET",

    }).then((res) => res.json()).then((res) => {
    
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res })

    }).catch((err) => {
        console.log(err)
        dispatch({ type: types.GET_PRODUCTS_FAILE })

    })
}
let addToCart=(data)=>(dispatch)=>{

    dispatch({ type: types.POST_CART_REQUEST})
     
    fetch(`https://first-deploy-92k2.onrender.com/addcart`, {
        method: "POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          },

    }).then((res) => res.json()).then((res) => {
         
        dispatch({ type: types.POST_CART_SUCCESS, payload: res })
  

    }).catch((err) => {
        console.log(err)
        dispatch({ type: types.POST_CART_FAILE })

    })
}
let GetCart=()=>(dispatch)=>{

    dispatch({ type: types.GET_CART_REQUEST})

    fetch(`https://first-deploy-92k2.onrender.com/cart`, {
        method: "GET",

    }).then((res) => res.json()).then((res) => {
      
        dispatch({ type: types.GET_CART_SUCCESS, payload: res.msg})

    }).catch((err) => {
        console.log(err)
        dispatch({ type: types.GET_CART_FAILE })

    })
}

let CartQuantity=(data)=>(dispatch)=>{

    dispatch({ type: types.PATCH_CARTQUANTITY_REQUEST})

    fetch(`https://first-deploy-92k2.onrender.com/editcart/${data._id}`, {
        method: "PATCH",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          },

    }).then((res) => res.json()).then((res) => {
      
        dispatch({ type: types.PATCH_CARTQUANTITY_SUCCESS, payload: res })

    }).catch((err) => {
        console.log(err)
        dispatch({ type: types.PATCH_CARTQUANTITY_FAILE })

    })

}
let deleteCart=(data)=>(dispatch)=>{

    dispatch({ type: types.DELETE_CART_REQUEST})
 
    fetch(`https://first-deploy-92k2.onrender.com/deletecart/${data._id}`, {
        method: "DELETE",
        }).then((res) => res.json()).then((res) => {
         
        dispatch({ type: types.DELETE_CART_SUCCESS, payload: res })

    }).catch((err) => {
        console.log(err)
        dispatch({ type: types.DELETE_CART_FAILE })

    })
}
export { getProducts,addToCart ,GetCart,CartQuantity,deleteCart}