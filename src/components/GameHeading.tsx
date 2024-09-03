import {GameQuery} from "../App.tsx";
import {Heading} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import usePlatforms from "../hooks/usePlatforms.ts";

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    const {data: genres} = useGenres();
    const {data: platforms} = usePlatforms()
    const platform = platforms.results.find(p => p.id === gameQuery.platformId)
    const genre = genres.results.find(g => g.id === gameQuery.genreId)
    const heading = `${platform?.name || ''} ${genre?.name || '' } Games`;
    return (
        <Heading as='h1' margin={2}>{heading}</Heading>
    )
}

export default GameHeading