import {Game} from "../../entities/Game.ts";
import DefinitionTerm from "./DefinitionTerm.tsx";
import {SimpleGrid, Text} from "@chakra-ui/react";
import CriticScore from "../GameCardComponents/CriticScore.tsx";

const GameAttributes = ({game} : {game: Game}) => {
    const gamePlatforms = game.parent_platforms.map( p => p.platform);
    return (
        <SimpleGrid columns={2} as='dl'>
            <DefinitionTerm term='Platforms'>
                {gamePlatforms.map( p => <Text key={p.id}>{p.name}</Text> )}
            </DefinitionTerm>
            <DefinitionTerm term='Metascore'>
                <CriticScore score={game.metacritic} />
            </DefinitionTerm>
            <DefinitionTerm term='Genres'>
                {game.genres.map( g => <Text key={g.id}>{g.name}</Text> )}
            </DefinitionTerm>
            <DefinitionTerm term='Publishers'>
                {game.publishers?.map( p => <Text key={p.id}>{p.name}</Text>)}
            </DefinitionTerm>
        </SimpleGrid>
    )
}

export default GameAttributes