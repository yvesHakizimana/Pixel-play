import {GameQuery} from "../App.tsx";
import {Heading} from "@chakra-ui/react";
import {useGenreById, usePlatformById} from "../hooks/useEntityById.ts";

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    const platform = usePlatformById(gameQuery.platformId)
    const genre = useGenreById(gameQuery.genreId)
    const heading = `${platform?.name || ''} ${genre?.name || '' } Games`;
    return (
        <Heading as='h1' margin={2}>{heading}</Heading>
    )
}

export default GameHeading