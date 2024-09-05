import {HStack, Image} from "@chakra-ui/react";
import logo from "../../assets/logo.webp"
import ColorModeSwitch from "../ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import {Outlet} from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <HStack  padding='10px'>
                <Image  src={logo} boxSize='60px'/>
                <SearchInput  />
                <ColorModeSwitch />
            </HStack>
            <Outlet />
        </>

    )
}

export default NavBar;