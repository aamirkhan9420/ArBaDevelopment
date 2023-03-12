import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ModalBox } from '../TermsAndCondition'

function Profile() {
  
  return (
   <Stack spacing={5}>
        <Box boxShadow={"md"} m={"auto"} mt={"4%"} w={"300px"} borderRadius={10}>
            <Box w={"100%"} borderRadius={10}>
                <Image w={"100%"} borderRadius={10} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqchhpDqTHjXT61lvvraMQJGDz-_DokaD1KsSnrtvX-Rz_QITPZg_emE5Phw_ttcvs1w&usqp=CAU'/>
            </Box>
            <Box p={2}>
               <Text>Username: mor_2314</Text>
               <Text>Email: useremai@123</Text>
            </Box>
        </Box>
        <Box>
             <ModalBox /> 
        </Box>
      
        </Stack>
  )
}

export default Profile