import {PropsWithChildren} from "react";
import {Box} from "@chakra-ui/react";

const GameCardContainer = ({children} : PropsWithChildren) => {
    return (
        <Box borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}

export default GameCardContainer;