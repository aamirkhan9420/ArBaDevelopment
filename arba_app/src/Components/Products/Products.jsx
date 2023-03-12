import { Box, Grid, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { getProducts } from '../../redux/App/action'
import CardBox from '../CardBox'

function Products() {
    let dispatch = useDispatch()
    let products = useSelector((state) => {
        return state.AppReducer.products
    })
   
    

    let location = useLocation()

    useEffect(() => {
        if (location.pathname == "/") {
            dispatch(getProducts(8))
        } else {
            dispatch(getProducts())
        }

    }, [])
 
    return (
        <Box m={"auto"} padding={{ base: 4, sm: 14, md: 14, lg: 8, xl: 10 }} >
            <Box w="100%" textAlign={"left"} fontSize={20} fontWeight={700}>
                <Text>Products</Text>
            </Box>
            <Grid m={"auto"} templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}

                w={{ base: '80%', sm: '80%', md: '80%', lg: '100%', xl: '100%' }}
                gap={5} h={"40%"}>
                {products.length > 0 && products.map((el, index) => (
                    <CardBox key={index} props={el} />
                ))}
            </Grid>
            {location.pathname == "/" && <Box w="100%" fontSize={20} fontWeight={600} p={10} display={"flex"} alignItems={"center"} justifyContent={{ base: "center", sm: "center", md: "cenrter", lg: "end", xl: "end" }}>
                <Link to={"/products"} >
                    <Text bgColor={"skyblue"} w={"fit-content"} color={"white"} p={2}>
                        {`All Products >>`}
                    </Text>
                </Link>
            </Box>}
        </Box>
    )
}

export default Products