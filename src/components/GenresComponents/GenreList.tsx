import useGenres from "../../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";
import GenreSpinner from "./GenreSpinner.tsx";

const GenreList = () => {
    const { data : genres, isLoading, error} = useGenres();

    if (isLoading) return <GenreSpinner />
    if(error) return  null;

    return (
        <List>
            {genres.map(genre => (
                <ListItem key={genre.id} paddingY={1}>
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={5} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList