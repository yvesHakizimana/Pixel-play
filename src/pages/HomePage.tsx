import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import GenreList from "../components/GenresComponents/GenreList.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformComponents/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            <Show above='lg'>
                <GridItem area='aside' paddingX={4}>
                    <GenreList />
                </GridItem>
            </Show>
            <Box paddingX={2}>
                <GridItem area='main'>
                    <GameHeading  />
                    <HStack marginBottom={4} spacing={5}>
                        <PlatformSelector />
                        <SortSelector  />
                    </HStack>
                    <GameGrid />
                </GridItem>
            </Box>
        </Grid>
    )
}
export default HomePage