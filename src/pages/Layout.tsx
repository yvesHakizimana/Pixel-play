import NavBar from "../components/NavbarComponents/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";

const LayoutPage = () => {
    return (
        <>
            <NavBar />
            <Box paddingX={3}>
                <Outlet />
            </Box>

        </>
    )
}

export default LayoutPage;