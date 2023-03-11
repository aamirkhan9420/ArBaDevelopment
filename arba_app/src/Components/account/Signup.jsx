import { Box, Button, FormControl, Highlight, Image, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import LoginLeftBox from './LoginLeftBox'
import { color } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

function Signup() {
    let [show, setShow] = useState(false)
 
    let handleForm = (e) => {
        e.preventDefault()
 
    }
    return (
        <Box>
            <Box m={"auto"} boxShadow={"md"} width={{ base: "95%", sm: "55%", md: "70%", lg: "65%", xl: "50%" }} h={"80vh"} mt={20} display={"flex"}>
                <LoginLeftBox />
                <Box gap={5} padding={{ base: 4, sm: 6, md: 6, lg: 8, xl: 10 }} display={"flex"} alignItems={"center"} flexDir={"column"} justifyItems={"center"} border={"1px solid red"} w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}>

                    <Logo />
                    <Text>Make your shopping easy</Text>
                    <Box border={"1px solid red"} width="100%"  >
                        <form onSubmit={handleForm} >
                            <Stack spacing={5}>
                                <Input placeholder='Username' variant="flushed" borderBottom="3px solid skyblue" />
                                <Input placeholder='Fullname' variant="flushed" borderBottom="3px solid skyblue" />
                                <Input placeholder='Email' variant="flushed" borderBottom="3px solid skyblue" />


                                <InputGroup>
                                    <Input placeholder='Password' type={show ? 'text' : 'password'} variant="flushed" borderBottom="3px solid skyblue" />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' variant={'ghost'}
                                            onClick={() =>
                                                setShow((show) => !show)
                                            }>
                                            {show ? <ViewIcon color={"skyblue"} /> : <ViewOffIcon color={"skyblue"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder='Confirm password' type={show ? 'text' : 'password'} variant="flushed" borderBottom="3px solid skyblue" />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' variant={'ghost'}
                                            onClick={() =>
                                                setShow((show) => !show)
                                            }>
                                            {show ? <ViewIcon color={"skyblue"} /> : <ViewOffIcon color={"skyblue"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Input type={"submit"} cursor={"pointer"} placeholder={"Register"} bgColor={"rgb(44, 203, 203)"} color={"white"} />
                                <Text  >

                                    Already have an account? <Link to={"/login"} style={{ fontWeight: 600, color: "skyblue" }}>Login</Link>

                                </Text>
                            </Stack>
                        </form>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Signup