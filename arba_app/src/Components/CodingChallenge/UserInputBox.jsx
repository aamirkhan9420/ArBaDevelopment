import { Box, Button, Input, InputGroup, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import OutputBox from './OutputBox'

function UserInputBox() {
    let [inp, setInput] = useState("")
    let [ans, setAns] = useState("")

    let handleform=(inp)=>{
        inp=inp.split(",").map(Number)
        console.log(inp)
        let x = 1

        inp.filter(x => x >= 1)
         .sort((a, b) => a - b)
         .map((val, i, arr) => {
            if(x < arr[i]) return 
            x = arr[i] + 1
        })
          setAns(x)
        return x
    }
    return (
        <Box m={"auto"} padding={{ base: 4, sm: 14, md: 14, lg: 8, xl: 10 }} w={"90%"}>
            <Box textAlign={"left"} fontSize={20} fontWeight={700}  m={"auto"}>
                <Text>Data Collection</Text>
            </Box>

            <Box pl= {{base:"0%",sm:"2%",md:"5%",lg:"5%",xl:"5%"}}  w={"fit-content"} textAlign={"left"} display={"flex"} flexDir={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} justifyContent={"space-between"} alignItems={"center"} gap={10} pt={5} pb={5} >
                <FormControl>
                    <Input value={inp} onChange={(e) => setInput(e.target.value)} placeholder='Input' variant="flushed" borderBottom="3px solid skyblue" />
                    <FormHelperText>Enter the values with comma(,)seperator eg: 1,3,6,4,1,2</FormHelperText>
                </FormControl>
                <Button onClick={()=>handleform(inp)} pl={10} pr={10} bgColor={"rgb(44, 203, 203)"} color={"white"}>Print Result</Button>

            </Box>
            <OutputBox ans={ans}/>
        </Box>
    )
}

export default UserInputBox