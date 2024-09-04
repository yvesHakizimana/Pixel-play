import useGenres from "../../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";
import GenreSpinner from "./GenreSpinner.tsx";
import useGameQueryStore from "../../store.ts";


const GenreList = () => {
    const { data , isLoading, error} = useGenres();
    const { gameQuery, setGenreId } = useGameQueryStore();

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
                                fontWeight={genre.id === gameQuery.genreId ? 'bold': 'normal'}
                                onClick={() => setGenreId(genre.id)}
                                fontSize='xl' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>

    )
}

export default GenreList