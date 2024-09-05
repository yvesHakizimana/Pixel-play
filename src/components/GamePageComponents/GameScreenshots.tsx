import useGameScreenshots from "../../hooks/useGameScreenshots.ts";
import {SimpleGrid, Image} from "@chakra-ui/react";

const GameScreenshots = ({gameSlug} : {gameSlug : string}) => {
    const {data: gameScreenshots}  = useGameScreenshots(gameSlug)
    return (
        <SimpleGrid columns={{ base: 1, md: 2}} spacing={2}>
            {gameScreenshots?.results.map(g => (
                <Image key={g.id} src={g.image} alt="game screenshot" objectFit='cover' />
            ))}
        </SimpleGrid>
    )
}
export default GameScreenshots