import {
  Container, Heading,
} from '@chakra-ui/react';
import Menu from '../components/menu.tsx';
import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'

export default function Home() {

  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Menu>
      <Container maxW={'7xl'}>
        <Heading>Teste</Heading>
      </Container>
    </Menu>

  );
}
