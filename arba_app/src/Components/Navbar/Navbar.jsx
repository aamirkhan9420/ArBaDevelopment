import { Badge, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Logo/Logo'

function Navbar() {
    return (
        <Flex zIndex={700} w={"100%"} boxShadow="sm" height={"90px"} alignItems={"center"} justifyContent="space-evenly" bgColor={"gray"} position="sticky" top={0}  >
            <Logo />
            <Box>
                <Badge variant='subtle' colorScheme='green' borderRadius={"100%"}>
                    1
                </Badge>
            </Box>
        </Flex>
    )
}

export default Navbar