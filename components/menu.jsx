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

  const logos = useColorModeValue('/images/logopreto.webp', '/images/logoBranco.webp');
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
                width={120}
                height={80}
                onClick={() => router.push('/')} />
            </Box>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              <Menu>
                <NavLink caminho={'/servicos'} tamanho='uppercase'>Serviços</NavLink>
                <NavLink caminho={'/estudoMercado'} tamanho='uppercase'>Estudos de mercado</NavLink>
                <NavLink caminho={'/segmentos'} tamanho='uppercase'>Segmentos</NavLink>
                <NavLink caminho={'/contato'} tamanho='uppercase'>Contato</NavLink>
                <NavLink caminho={'/sobre'} tamanho='uppercase'>Sobre</NavLink>
                <ButtonMenu>
                  Parceiros
                </ButtonMenu>
                <MenuList>
                  <VStack flexDir={'column'} spacing={4} alignItems={'left'} padding='10px'>
                    <NavLink caminho={'/parceiros/sslStore'} tamanho='normal'>SSL Store - Segurança Web</NavLink>
                    <NavLink caminho={'/parceiros/zoho'} tamanho='normal'>Zoho - Parceiro Advanced</NavLink>
                    <NavLink caminho={'/parceiros/webpeak'} tamanho='normal'>Parceiro WebPeak - Consultoria WebPeak</NavLink>
                    <NavLink caminho={'/parceiros/vtex'} tamanho='normal'>VTEX - Plataforma de Ecommerce</NavLink>
                    <NavLink caminho={'/parceiros/digitalOcean'} tamanho='normal'>Digital Ocean - Cloud</NavLink>
                    <NavLink caminho={'/parceiros/webflow'} tamanho='normal'>WebFlow - Criação de Sites</NavLink>
                  </VStack>
                </MenuList>
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
                  <NavLink caminho={'/servicos'} tamanho='uppercase'>Serviços</NavLink>
                  <NavLink caminho={'/estudoMercado'} tamanho='uppercase'>Estudos de mercado</NavLink>
                  <NavLink caminho={'/segmentos'} tamanho='uppercase'>Segmentos</NavLink>
                  <NavLink caminho={'/contanto'} tamanho='uppercase'>Contato</NavLink>
                  <NavLink caminho={'/sobre'} tamanho='uppercase'>Sobre</NavLink>
                  <ButtonMenu>
                    Parceiros
                  </ButtonMenu>
                  <MenuList>
                    <VStack flexDir={'column'} spacing={4} alignItems={'left'} padding='10px'>
                      <NavLink caminho={'/parceiros/sslStore'} tamanho='normal'>SSL Store - Segurança Web</NavLink>
                      <NavLink caminho={'/parceiros/zoho'} tamanho='normal'>Zoho - Parceiro Advanced</NavLink>
                      <NavLink caminho={'/parceiros/webpeak'} tamanho='normal'>Parceiro WebPeak - Consultoria WebPeak</NavLink>
                      <NavLink caminho={'/parceiros/vtex'} tamanho='normal'>VTEX - Plataforma de Ecommerce</NavLink>
                      <NavLink caminho={'/parceiros/digitalOcean'} tamanho='normal'>Digitak Ocean - Cloud</NavLink>
                      <NavLink caminho={'/parceiros/webflow'} tamanho='normal'>WebFlow - Criação de Sites</NavLink>
                    </VStack>
                  </MenuList>
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

