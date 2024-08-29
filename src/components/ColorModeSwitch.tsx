import {HStack, Switch, useColorMode, Text} from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}></Switch>
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch