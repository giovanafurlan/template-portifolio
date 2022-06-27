import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  Grid,
  GridItem,
  useColorMode,
  MenuButton,
  MenuList,
  VStack,
  MenuItem,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon
} from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useAmp } from 'next/amp';

function NavLink({ children, caminho, tamanho }) {
  const router = useRouter();

  return (
    <Link fontWeight={'medium'}
      textTransform={tamanho}
      fontSize='14px'
      _hover={{
        textDecoration: 'none',
        color: 'gray'
      }}
      _activeLink={{
        color: 'gray'
      }}
      _active={{
        color: 'gray'
      }}
      cursor='pointer'
      onClick={() => router.push(caminho)}
    >{children}</Link>
  )
}

function ButtonMenu({ children }) {
  const cor2 = useColorModeValue('white', 'black');

  return (
    <MenuButton fontWeight={'medium'}
      fontSize='14px'
      textTransform={'uppercase'}
      textAlign='left'
      background={cor2}
      padding={0}
      _hover={{
        color: 'gray',
        background: 'none'
      }}
      _active={{
        color: 'gray',
        background: 'none',
      }}
      _focus={{
        outline: 'none'
      }}
      as={Button}
      rightIcon={<ChevronDownIcon />}>
      {children}
    </MenuButton>
  )
}

export default function withAction({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const logos = useColorModeValue('/images/logo-template-preto.webp', '/images/logo-template-branco.webp');
  const cor = useColorModeValue('black', 'white');
  const cor2 = useColorModeValue('white', 'black');

  const router = useRouter();

  return (
    <>
      <Grid>
        <GridItem pos='fixed'
          zIndex={1}
          w={'100%'}
          px={4}
          background={cor2}
          height='70px'>
          <Flex h={16} justifyContent={'space-between'} alignItems={'center'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box cursor={'pointer'}>
              <img src={logos}
                alt="Logo WebPeak"
                width={60}
                height={40}
                onClick={() => router.push('/')} />
            </Box>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              <Menu>
                <NavLink caminho={'/blogs'} tamanho='uppercase'>Blog</NavLink>
              </Menu>
            </HStack>
            <Button background='none'
              _hover={{ background: 'none' }}
              onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4} backgroundColor='white'>
                <Menu>
                  <NavLink caminho={'/blogs'} tamanho='uppercase'>Blog</NavLink>
                </Menu>

              </Stack>
            </Box>
          ) : null}
        </GridItem>
        <GridItem marginTop={'100px'}>{children}</GridItem>
      </Grid>
    </>
  );
}

