import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Carousel from '../Silk'
import Products from '../Products/Products'
import { ModalBox } from '../TermsAndCondition'

function Home() {

   
    return (
        <Box>
            <ModalBox />
            <Carousel />
            <Products />
        </Box>
    )
}

export default Home
