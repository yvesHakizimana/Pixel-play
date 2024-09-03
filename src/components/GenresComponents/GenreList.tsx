import useGenres, {Genre} from "../../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";
import GenreSpinner from "./GenreSpinner.tsx";


interface  Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const { data : genres, isLoading, error} = useGenres();

    if (isLoading) return <GenreSpinner />
    if(error) return  null;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
            <List>
                {genres?.map(genre => (
                    <ListItem key={genre.id} paddingY={1}>
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize='32px'
                                borderRadius={5}
                                objectFit='cover'
                            />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} onClick={() => onSelectGenre(genre)} fontSize='xl' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>

    )
}

export default GenreList