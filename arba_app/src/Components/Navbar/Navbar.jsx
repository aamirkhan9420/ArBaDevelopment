import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import { useNavigate } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
    let [total,setTotal]=useState("")
    let navigate = useNavigate()
    let isAuth = useSelector((state) => {
        return state.AuthReducer.isAuth
    })
    let cart = useSelector((state) => {
        return state.AppReducer.cart
    })
    useEffect(()=>{
        let t=0
        for(let i=0;i<cart.length;i++){
            t+=cart[i].quantity
        }
     setTotal(t)
    },[cart.length])
    return (
        <Flex p={10} zIndex={700} w={"100%"} boxShadow="sm" height={"90px"} alignItems={"center"} justifyContent="space-between" bgColor={"white"} position="sticky" top={0}  >
          <Link to={"/"}>
          <Logo />
          </Link>
            
            <Box display={"flex"} width={{ base: "40%", sm: "35%", md: "30%", lg: "25%", xl: "10%" }} alignItems={"center"} justifyContent={"space-between"} >
                <Link to={"/cart"}> 
                <Badge overlap="rectangular" color="secondary" badgeContent={total} >
                   <ShoppingCartIcon color="primary" style={{ fontSize: "30px" }} />{" "}
                                     
                </Badge> 
                 </Link>
                <Menu >
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<VscAccount />}
                        bg="variant"
                        fontSize={25}
                        color={"skyblue"}
                    />

                    <MenuList bgColor={"black"} color={"skyblue"} fontWeight={700}>
                        {isAuth ? <MenuItem onClick={() => {
                            localStorage.removeItem("isAuth")
                            navigate("/login")
                        }}>Logout</MenuItem> :
                            <MenuItem>
                                <Link to={"/login"}>
                                    Login
                                </Link>
                            </MenuItem>}
                        <MenuItem>
                            Profile
                        </MenuItem>
                        <MenuItem>
                            Code challenge
                        </MenuItem>

                    </MenuList>
                </Menu>

            </Box>

        </Flex>
    )
}

export default Navbar