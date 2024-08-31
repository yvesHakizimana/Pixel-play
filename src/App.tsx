import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenresComponents/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformComponents/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
                <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
            </GridItem>
        </Show>
        <GridItem area='main'>
            <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
            <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
        </GridItem>
    </Grid>
  )
}

export default App
