import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function Logo() {
    return (
        <Box>
            <Image borderRadius={"100%"} src='./arbalogo.png' h={20} w={20} />
        </Box>

    )
}

export default Logo