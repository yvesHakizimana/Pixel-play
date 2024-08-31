import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import usePlatforms from "../../hooks/usePlatforms.ts";
import {BiChevronDown} from "react-icons/bi";
import {Platform} from "../../hooks/useGames.ts";

interface Props{
    onSelectPlatform: ( platform: Platform ) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
    const {data : platforms} = usePlatforms();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                Platforms
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