import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCardComponents/GameCard.tsx";
import GameCardSkeleton from "./GameCardComponents/GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardComponents/GameCardContainer.tsx";

const GameGrid = () => {
    const { data: games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 3, lg: 5}} padding='10px' spacing={10}>
                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer> )}
                {games.map((game) => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>

                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid