import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Heading, Spinner, Text} from "@chakra-ui/react";

const GameDetailsPage = () => {
    const {slug} = useParams();
    const {data : game, isLoading, error} = useGame(slug!);

    if(error || !game) return null;

    if(isLoading) return <Spinner />

    return (
        <>
            <Heading>{game.name}</Heading>
            <Text>{game.description_raw}</Text>
        </>
    )
}

export default GameDetailsPage;