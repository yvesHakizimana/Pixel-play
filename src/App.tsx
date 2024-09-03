import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavbarComponents/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenresComponents/GenreList.tsx";
import {useState} from "react";
import PlatformSelector from "./components/PlatformComponents/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery{
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}

function App() {
  const [gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery)

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
            <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
        </GridItem>
        <Show above='lg'>
            <GridItem area='aside' paddingX={4}>
                <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})} selectedGenreId={gameQuery.genreId}/>
            </GridItem>
        </Show>
        <GridItem area='main'>
            <GameHeading gameQuery={gameQuery} />
            <HStack paddingX={2} marginBottom={4} spacing={5}>
                <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})} selectedPlatformId={gameQuery.platformId}/>
                <SortSelector onSelectOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} selectedOrder={gameQuery.sortOrder} />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
        </GridItem>
    </Grid>
  )
}

export default App
