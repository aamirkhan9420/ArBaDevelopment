import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function OutputBox({ans}) {
  return (
    <Box >
    <Box  textAlign={"left"} fontSize={20} fontWeight={700}  border={"1px solid red"} m={"auto"}>
        <Text>Output</Text>
    </Box>
     <Box display={"flex"} justifyContent={{base:"center",sm:"center",md:"left",lg:"left",xl:"left"}} alignItems={"center"} fontSize={20} fontWeight={700}  border={"1px solid red"} m={"auto"} pl={"5%"}>
        <Text bgColor={"rgb(44, 203, 203)"} w={"fit-content"} color={"white"} pl={10} pr={10}>
            {ans}
        </Text>
     </Box>
    </Box>
  )
}

export default OutputBox