import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavbarComponents/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenresComponents/GenreList.tsx";
import PlatformSelector from "./components/PlatformComponents/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";


function App() {

  return (
    <Grid
        templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
        }}
    >
        <GridItem area='nav'>
            <NavBar />
        </GridItem>
        <Show above='lg'>
            <GridItem area='aside' paddingX={4}>
                <GenreList />
            </GridItem>
        </Show>
        <GridItem area='main'>
            <GameHeading  />
            <HStack paddingX={2} marginBottom={4} spacing={5}>
                <PlatformSelector />
                <SortSelector  />
            </HStack>
            <GameGrid />
        </GridItem>
    </Grid>
  )
}

export default App
