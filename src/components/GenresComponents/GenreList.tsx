import useGenres, {Genre} from "../../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";
import GenreSpinner from "./GenreSpinner.tsx";


interface  Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const { data : genres, isLoading, error} = useGenres();

    if (isLoading) return <GenreSpinner />
    if(error) return  null;

    return (
        <List>
            {genres.map(genre => (
                <ListItem key={genre.id} paddingY={1}>
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={5} />
                        <Button onClick={() => onSelectGenre(genre)} fontSize='xl' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList