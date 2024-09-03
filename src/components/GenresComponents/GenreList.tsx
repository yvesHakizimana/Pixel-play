import useGenres, {Genre} from "../../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";
import GenreSpinner from "./GenreSpinner.tsx";


interface  Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({onSelectGenre, selectedGenreId}: Props) => {
    const { data , isLoading, error} = useGenres();

    if (isLoading) return <GenreSpinner />
    if(error) return  null;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
            <List>
                {data.results?.map(genre => (
                    <ListItem key={genre.id} paddingY={1}>
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize='32px'
                                borderRadius={5}
                                objectFit='cover'
                            />
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={genre.id === selectedGenreId ? 'bold': 'normal'}
                                onClick={() => onSelectGenre(genre)}
                                fontSize='xl' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>

    )
}

export default GenreList