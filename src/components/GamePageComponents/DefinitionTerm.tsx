import {ReactNode} from "react";
import {Box, Heading} from "@chakra-ui/react";

interface Props{
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionTerm = ({term, children} : Props) => {
    return (
        <Box marginY={5}>
            <Heading as='dt' fontSize='24px' color='gray.600'>
                {term}
            </Heading>
            <dd>
                {children}
            </dd>
        </Box>
    )
}

export default DefinitionTerm;