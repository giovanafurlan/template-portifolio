import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiMenu,
  FiGrid,
  FiMessageSquare,
  FiFolder,
  FiYoutube,
  FiLinkedin,
  FiGithub,
  FiInstagram
} from 'react-icons/fi';
import { ReactText } from 'react';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import useTranslation from 'next-translate/useTranslation';
import DarkLight from './darkLight';
import Language from './language';

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const logos = useColorModeValue('/images/logo.png', '/images/logo.png');

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <CloseButton display={{ base: 'flex', md: 'none' }} float='right' onClick={onClose} />
      <Flex flexDir={'column'} height='100vh' justifyContent={'space-between'}>
        <Box>
          <Box display={{ base: 'none', md: 'flex' }}
            pl='50px'
            pt='20px'>
            <img src={logos}
              alt="Logo"
              width={100}
              height={50} />
          </Box>
          <Link onClick={() => router.push('/')}
            _hover={{ textDecor: 'none' }}>
            <NavItem icon={FiHome}
              mt='20px'>
              {t("home")}
            </NavItem>
          </Link>
          <Link onClick={() => router.push('/')}
            _hover={{ textDecor: 'none' }}>
            <NavItem icon={FiFolder}>
              {t("conhecimentos")}
            </NavItem>
          </Link>
          <Link onClick={() => router.push('/')}
            _hover={{ textDecor: 'none' }}>
            <NavItem icon={FiGrid}>
              {t("projetos")}
            </NavItem>
          </Link>
          <Link onClick={() => router.push('/')}
            _hover={{ textDecor: 'none' }}>
            <NavItem icon={FiMessageSquare}
              mb='20px'>
              {t("contato")}
            </NavItem>
          </Link>
        </Box>
        <Box mb='20px'>
          <Flex justifyContent={'center'}>
            <DarkLight />
            <Language />
          </Flex>
          <Flex justifyContent={'center'} mt='20px'>
            <Link href='https://www.instagram.com/giifurlan/'
              target={'_blank'}
              _hover={{ textDecor: 'none' }}>
              <SocialMedia icon={FiInstagram} />
            </Link>
            <Link href='https://github.com/giovanafurlan'
              target={'_blank'}
              _hover={{ textDecor: 'none' }}>
              <SocialMedia icon={FiGithub} />
            </Link>
            <Link href='https://www.youtube.com/channel/UC1rx7l1472oVdS7HBHY19cA'
              target={'_blank'}
              _hover={{ textDecor: 'none' }}>
              <SocialMedia icon={FiYoutube} />
            </Link>
            <Link href='https://www.linkedin.com/in/giovana-furlan/'
              target={'_blank'}
              _hover={{ textDecor: 'none' }}>
              <SocialMedia icon={FiLinkedin} />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box >
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      {...rest}>
      {icon && (
        <Image
          mr="4"
          fontSize="20"
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

interface SocialMediaProps extends FlexProps {
  icon: IconType;
}
const SocialMedia = ({ icon, ...rest }: SocialMediaProps) => {
  return (
    <Flex justifyContent={'center'}
      cursor="pointer"
      {...rest}>
      {icon && (
        <Image
          mr="4"
          fontSize="18"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
    </Flex>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const router = useRouter();
  const logos = useColorModeValue('/images/logo.png', '/images/logo.png');

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box pl='10px'>
        <img src={logos}
          alt="Logo"
          width={80}
          height={40} />
      </Box>
    </Flex>
  );
};