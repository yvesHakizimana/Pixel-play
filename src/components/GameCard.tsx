import {Card, CardBody, Heading, Image} from "@chakra-ui/react";
import {Game} from "../hooks/useGames.ts";
import PlatformIconList from "./PlatformIconList.tsx";

interface Props{
    game: Game
}

const GameCard = ( {game } : Props) => {
    const game_platforms = game.parent_platforms.map(p => p.platform);
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game_platforms} />
            </CardBody>
        </Card>
    )
}

export default GameCard