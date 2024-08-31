import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import usePlatforms from "../../hooks/usePlatforms.ts";
import {BiChevronDown} from "react-icons/bi";

const PlatformSelector = () => {
    const {data : platforms} = usePlatforms();
    console.log(platforms);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {platforms.map(platform => (
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;