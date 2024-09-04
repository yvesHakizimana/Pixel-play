import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import usePlatforms from "../../hooks/usePlatforms";
import {BiChevronDown} from "react-icons/bi";
import {usePlatformById} from "../../hooks/useEntityById.ts";
import useGameQueryStore from "../../store.ts";

const PlatformSelector = () => {
    const {data} = usePlatforms();
    const {gameQuery, setPlatformId} = useGameQueryStore();
    const selectedPlatform =  usePlatformById(gameQuery.platformId);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => (
                    <MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;