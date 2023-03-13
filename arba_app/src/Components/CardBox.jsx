import { Badge, Box, Button, Image, Stack, Text } from '@chakra-ui/react'

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart, CartQuantity, deleteCart, GetCart } from '../redux/App/action'

function CardBox({ props }) {
  let dispatch = useDispatch()
 

  let cart = useSelector((state) => {
    return state.AppReducer.cart
  })

  let addCartItem = (data) => {
    data.quantity = 1

    dispatch(addToCart(data))
    let t = 0
    for (let i = 0; i <cart.length; i++) {
        t += cart[i].quantity
    }
 
    if(t==0){
      localStorage.setItem("total",1)
    }else{
      console.log(t)
            localStorage.setItem("total",t+1)
    }
    
    

  }
  let handleIncreament = (data) => {
    let ans = cart.find((el) => el.id == data.id)
    ans.quantity++

    dispatch(CartQuantity(ans))
    let t =0
    for (let i = 0; i < cart.length; i++) {
        t += cart[i].quantity
    }
  
    localStorage.setItem("total",t)


  }
  let handleDecreament = (data) => {
    let ans = cart.find((el) => el.id == data.id)
      console.log(ans.quantity)
    if (ans.quantity > 1) {
      ans.quantity--
      dispatch(CartQuantity(ans))
      
      let t = 0
    for (let i = 0; i < cart.length; i++) {
        t += cart[i].quantity
    }
  
    localStorage.setItem("total",t)
      
    } else {
     
     dispatch(deleteCart(ans))
   
      let x=localStorage.getItem("total")
      if(x!==1&&ans.quantity==1){
      
        localStorage.setItem("total",x-1)
        // return
      } 
      if(x==1){
      
        localStorage.removeItem("total")
        // return
      } 
      
    }
   
    
  }
  let checkQuantity = (data) => {
    let ans = cart.find((el) => el.id == data.id)

    return ans.quantity

  }

  useEffect(() => {

    dispatch(GetCart())
 
    
  }, [cart.length])
  
  return (

    <Box boxShadow={"md"} h={{ base: "460px", sm: "440px", md: "425px", lg: "420px", xl: "400px" }} borderRadius={"10px"} display="flex" flexDir={"column"} justifyContent={"space-between"}>

      <Box h={"50%"} width={"100%"}>
        <Image borderRadius={"10px"} h={"100%"} w={"100%"} src={props.image} />
      </Box>
      <Stack h={"30%"} p={2}>
        <Box><Text>{props.title}<Badge color={"blue"}>{props.category}</Badge></Text> </Box>


        <Box><Text>Rating: {props.rating.rate}</Text></Box>

        <Box><Text>Price: {props.price}</Text></Box>


      </Stack>
      <Box p={2}>
        {cart.length > 0 && cart.find((el) => el.id === props.id) !== undefined ?
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={3}>
            <Button bgColor={"#D11243"} color={"white"} onClick={() => handleDecreament(props)}>-</Button >

            <Text>{checkQuantity(props)}</Text>
            <Button bgColor={"#D11243"} color={"white"} onClick={() => handleIncreament(props)}>+</Button>
          </Box>
          :
          <Button bgColor={"#D11243"} color={"white"} onClick={() => addCartItem(props)}>Add to cart</Button>}
      </Box>
    </Box>
  )
}

export default React.memo(CardBox)