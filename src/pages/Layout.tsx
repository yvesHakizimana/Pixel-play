import NavBar from "../components/NavbarComponents/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";

const LayoutPage = () => {
    return (
        <Box paddingX={5}>
            <NavBar />
            <Outlet />
        </Box>
    )
}

export default LayoutPage;