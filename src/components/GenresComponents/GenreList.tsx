import useGenres from "../../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";

const GenreList = () => {
    const { data : genres} = useGenres();
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