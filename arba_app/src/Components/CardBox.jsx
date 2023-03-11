import { Badge, Box, Button, Grid, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function CardBox({ props }) {

  return (

    <Box boxShadow={"md"} h={{ base: "460px", sm: "440px", md: "425px", lg: "420px", xl: "400px" }} borderRadius={"10px"}  display="flex" flexDir={"column"} justifyContent={"space-between"}>

      <Box h={"50%"} width={"100%"}>
        <Image borderRadius={"10px"} h={"100%"} w={"100%"} src={props.image} />
      </Box>
      <Stack  h={"30%"} p={2}>
        <Box><Text>{props.title}<Badge color={"blue"}>{props.category}</Badge></Text> </Box>


        <Box><Text>Rating: {props.rating.rate}</Text></Box>

        <Box><Text>Price: {props.price}</Text></Box>


      </Stack>
      <Box  p={2}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  )
}

export default CardBox