import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCardComponents/GameCard.tsx";
import GameCardSkeleton from "./GameCardComponents/GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardComponents/GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery } : Props) => {
    const { data: games, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
    if(error) return <Text>{error.message}</Text>
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3, lg: 4}} padding='10px' spacing={5}>
            {isLoading && skeletons.map((skeleton) =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
            )}
            {games?.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    )
}

export default GameGrid