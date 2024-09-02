import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "../../hooks/useGames.ts";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../../services/image-url.ts";

interface Props{
    game: Game
}

const GameCard = ( {game } : Props) => {
    const game_platforms = game.parent_platforms.map(p => p.platform);
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={2}>
                    <PlatformIconList platforms={game_platforms} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard