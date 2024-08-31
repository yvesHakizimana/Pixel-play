import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "../hooks/useGames.ts";
import PlatformIconList from "./GameCardComponents/PlatformIconList.tsx";
import CriticScore from "./GameCardComponents/CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props{
    game: Game
}

const GameCard = ( {game } : Props) => {
    const game_platforms = game.parent_platforms.map(p => p.platform);
    return (
        <Card width='300px' borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game_platforms} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard