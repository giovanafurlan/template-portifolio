import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    Link,
    Text
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export default function Parceiros({ titulo, tema, tempo, link, texto }) {

    return (
        <Container maxW={'7xl'}
            alignItems='center'
            textAlign={'center'}>
            <Heading m='1vw'>
                {titulo}
            </Heading>
            <Divider />
            <Flex justifyContent={'space-around'}>
                <Text>{tema}</Text>
                <Text>{tempo}</Text>
            </Flex>
            <Link href={link}
                target='_blank'
                _hover={{
                    textDecor: 'none'
                }}>
                <Button borderRadius={0}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    bg={'brand.primary'}
                    color='white'
                    _hover={{
                        bg: 'purple.500'
                    }}>
                    Conhecer
                </Button>
            </Link>
            <Box m='2vw 5vw 2vw 5vw'
                alignItems='center'
                textAlign='initial'>
                <ReactMarkdown components={ChakraUIRenderer()}
                    children={texto}
                    skipHtml>
                </ReactMarkdown>
            </Box>
        </Container>
    )
}