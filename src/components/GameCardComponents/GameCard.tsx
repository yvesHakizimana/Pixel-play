import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../../services/image-url.ts";
import GameEmoji from "./GameEmoji.tsx";
import {Link} from "react-router-dom";
import {Game} from "../../entities/Game.ts";

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
                <Heading fontSize='2xl'>
                    <Link to={'/games/' + game.slug}>{game.name}</Link>
                </Heading>
                <GameEmoji rating={game.rating_top} />
            </CardBody>
        </Card>
    )
}

export default GameCard