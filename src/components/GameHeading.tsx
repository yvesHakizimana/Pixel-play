import {GameQuery} from "../App.tsx";
import {Heading} from "@chakra-ui/react";

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || '' } Games`;
    return (
        <Heading as='h1' margin={2}>{heading}</Heading>
    )
}

export default GameHeading