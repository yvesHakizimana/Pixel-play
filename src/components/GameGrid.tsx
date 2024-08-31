import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCardComponents/GameCard.tsx";
import GameCardSkeleton from "./GameCardComponents/GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardComponents/GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";

interface Props{
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre } : Props) => {
    const { data: games, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 3, lg: 5}} padding='10px' spacing={4}>
                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer> )}
                {games.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>

                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid