import {Heading, Text, Box} from "@chakra-ui/react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import NavBar from "../components/NavbarComponents/NavBar.tsx";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <Box paddingX={5}>
                <Heading>Oops!</Heading>
                <Text>{isRouteErrorResponse(error) ? 'The page requested does not exist' : 'An unexpected error occurred'}</Text>
            </Box>

        </>
    )
}

export default ErrorPage;