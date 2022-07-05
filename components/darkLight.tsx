import {
    MoonIcon,
    SunIcon
} from "@chakra-ui/icons";
import {
    Box,
    Button,
    useColorMode
} from "@chakra-ui/react";

export default function DarkLight() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <Button background={'none'}
                borderWidth='1px'
                onClick={toggleColorMode}
                _hover={{ bg: 'none' }}
                _focus={{ boxShadow: 'outline', bg: 'none' }}
                borderRadius='5px'
                px='2.5'
                py='2.5'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
    );
};