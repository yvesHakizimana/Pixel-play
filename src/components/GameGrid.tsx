import {Box, Button, SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCardComponents/GameCard.tsx";
import GameCardSkeleton from "./GameCardComponents/GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardComponents/GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import React from "react";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery } : Props) => {
    const { data, error, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
    if(error) return <Text>{error.message}</Text>
    return (
        <Box padding='10px'>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3, lg: 4}} spacing={5}>
            {isLoading && skeletons.map((skeleton) =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
            )}

            {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                    {page.results?.map((game) => (
                        <GameCardContainer key={game.id}>
                            <GameCard game={game} />
                        </GameCardContainer>
                    ))}
                </React.Fragment>
            ))}
        </SimpleGrid>
         <Button
             disabled={!hasNextPage}
             onClick={() => fetchNextPage()}
             marginY={2}
         >
             {isFetchingNextPage ? 'Loading' : 'Load More'}
         </Button>
        </Box>
    )
}

export default GameGrid