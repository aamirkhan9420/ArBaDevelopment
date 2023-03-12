import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import { useLocation, useNavigate } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetCart } from '../../redux/App/action';


function Navbar() {
    let [total, setTotal] = useState("")
    let navigate = useNavigate()
    let location = useLocation()
    let dispatch=useDispatch()
    let isAuth = useSelector((state) => {
        return state.AuthReducer.isAuth
    })
    let cart = useSelector((state) => {
        return state.AppReducer.cart
    })
    useEffect(() => {
        dispatch(GetCart())
        let t = 0
        for (let i = 0; i < cart.length; i++) {
            t += cart[i].quantity
        }
        setTotal(t)
    }, [cart.length])
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

                    <MenuList bgColor={"black"} color={"skyblue"} fontWeight={700} fontSize={20}>
                        {isAuth ? <MenuItem onClick={() => {
                            localStorage.removeItem("isAuth")
                            navigate("/login")
                        }}>Logout</MenuItem> :
                            <Link to={"/login"}>
                                <MenuItem>
                                    Login
                                </MenuItem>
                            </Link>}

                        <Link to={"/profile"}>
                            <MenuItem>
                                Profile
                            </MenuItem>
                        </Link>
                        <Link to={"/codingchallenge"}>
                            <MenuItem>
                                Code Challenge
                            </MenuItem>
                        </Link>

                    </MenuList>
                </Menu>

            </Box>

        </Flex>
    )
}

export default Navbar