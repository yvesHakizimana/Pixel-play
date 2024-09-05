import {PropsWithChildren} from "react";
import {Box} from "@chakra-ui/react";

const GameCardContainer = ({children} : PropsWithChildren) => {
    return (
        <Box borderRadius={10} overflow="hidden" _hover={{
            transform: 'scale(1.04)', // Slightly enlarges the card on hover
            boxShadow: 'lg',          // Adds a large shadow on hover
            transition: 'transform 0.2s ease-in-out', // Smooth transition for scaling
        }}>
            {children}
        </Box>
    )
}

export default GameCardContainer;