import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function ProblemBox() {
    return (
        <Box m={"auto"} padding={{ base: 4, sm: 14, md: 14, lg: 8, xl: 10 }} >
            <Box w={"90%"} textAlign={"left"} fontSize={20} fontWeight={700}  m={"auto"}>
                <Text>Code Challenge</Text>
            </Box>
            <Box  w={"90%"} m={"auto"} pt={20} pb={20} bgColor={"rgb(44, 203, 203)"} color={"white"} fontWeight={600} >
                <Text>Write a function:</Text>
                <Text>Function solution(A);</Text>
                <Text>That given an Array of N integers, return the smallest possitive integer (greater than 0) that dosenot occour in A.</Text>
                <Text>For example. given A=[1,3,6,4,1,2] the function should return 5. </Text>
                <Text> given A=[1,2,3] the function should return 4. </Text>
                <Text> given A=[-1,-3] the function should return 1. </Text>
                <Text> Writer an efficient algorithm for the following assumptions:</Text>
                <Text> N is a integer with in the range [1..100,000];</Text>
                <Text> Each element of array A is an integer with in the range [-1,000,000..100,000,000];</Text>
            </Box>

        </Box>
    )
}

export default ProblemBox