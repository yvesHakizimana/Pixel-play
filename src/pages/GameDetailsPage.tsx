import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/GamePageComponents/ExpandableText.tsx";
import GameAttributes from "../components/GamePageComponents/GameAttributes.tsx";
import GameTrailer from "../components/GamePageComponents/GameTrailer.tsx";
import GameScreenshots from "../components/GamePageComponents/GameScreenshots.tsx";

const GameDetailsPage = () => {
    const {slug} = useParams();
    const {data : game, isLoading, error} = useGame(slug!);

    if(error || !game) return null;

    if(isLoading) return <Spinner />

    return (
        <SimpleGrid columns={{base: 1, md: 2}}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameSlug={game.slug} />
                <GameScreenshots gameSlug={game.slug} />
            </GridItem>
        </SimpleGrid>
    )
}

export default GameDetailsPage;