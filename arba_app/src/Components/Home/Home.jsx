import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { ControlledCarousel } from '../Carousel/Carousel'
import Products from '../Products/Products'
import { ModalBox } from '../TermsAndCondition'

function Home() {

   
    return (
        <Box>
            <ModalBox />
            <ControlledCarousel />
            <Products />
        </Box>
    )
}

export default Home
