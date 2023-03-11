import { Box, Grid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { GetCart } from '../../redux/App/action'
import CardBox from '../CardBox'

function Cart() {
    let dispatch = useDispatch()
    let cart=useSelector((state)=>{
        return state.AppReducer.cart
      })

    useEffect(() => {
        dispatch(GetCart())
    }, [cart.length])
    return (
        <Box m={"auto"} padding={{ base: 4, sm: 14, md: 14, lg: 8, xl: 10 }} >
        <Box w="100%" textAlign={"left"} fontSize={20} fontWeight={600} pb={10}>
            <Text>My Carts</Text>
        </Box>
            <Grid m={"auto"} templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}

                w={{ base: '80%', sm: '80%', md: '80%', lg: '100%', xl: '100%' }}
                gap={5} h={"40%"}>
                {cart.length > 0 && cart.map((el, index) => (
                    <CardBox key={index} props={el} />
                ))}
            </Grid>
        </Box>
    )
}

export default Cart