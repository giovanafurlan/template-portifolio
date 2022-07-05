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
                color={'gray.300'}
                m='10px'
                onClick={toggleColorMode}
                _hover={{ bg: 'gray.700' }}
                _focus={{ boxShadow: 'outline' }}
                borderRadius='5px'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
    );
};