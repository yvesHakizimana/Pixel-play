import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import usePlatforms, {Platform} from "../../hooks/usePlatforms";
import {BiChevronDown} from "react-icons/bi";
import {usePlatformById} from "../../hooks/useEntityById.ts";

interface Props{
    onSelectPlatform: ( platform: Platform ) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const {data} = usePlatforms();
    const selectedPlatform = usePlatformById(selectedPlatformId);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;