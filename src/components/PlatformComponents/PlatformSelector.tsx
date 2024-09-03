import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import usePlatforms, {Platform} from "../../hooks/usePlatforms";
import {BiChevronDown} from "react-icons/bi";

interface Props{
    onSelectPlatform: ( platform: Platform ) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const {data : platforms} = usePlatforms();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {platforms.map(platform => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;