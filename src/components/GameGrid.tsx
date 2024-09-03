import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCardComponents/GameCard.tsx";
import GameCardSkeleton from "./GameCardComponents/GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardComponents/GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery } : Props) => {
    const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
    const fetchedGames = data?.pages.reduce((total, page) => total + page.results.length, 0);
    if(error) return <Text>{error.message}</Text>
    return (
        <InfiniteScroll next={fetchNextPage} hasMore={hasNextPage} loader={<Spinner />} dataLength={fetchedGames || 0}>
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
        </InfiniteScroll>
    )
}

export default GameGrid