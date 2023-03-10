import { Box } from '@chakra-ui/react'
import React from 'react'

function LoginLeftBox() {
    return (
        // {{base:"", sm:"",md:"",lg:"",xl:""}}
        <Box bgColor={"rgb(44, 203, 203)"} height={"100%"} width={"50%"} display={{base:"none", sm:"none",md:"flex",lg:"flex",xl:"flex"}}flexDir={"column"} justifyContent={"space-between"}>
              <Box  h={"40%"} display={"flex"} justifyContent={"flex-start"}>
                <Box h={"100%"} w={"40%"} borderBottomRightRadius={"100%"} bgColor={"rgb(1, 160, 160)"}>
                </Box>
            </Box>
            <Box  h={"40%"} display={"flex"} justifyContent={"flex-end"}>
                <Box h={"100%"} w={"40%"} borderTopLeftRadius={"100%"} bgColor={"rgb(1, 160, 160)"}>

                </Box>
            </Box>
        </Box>
    )
}

export default LoginLeftBox