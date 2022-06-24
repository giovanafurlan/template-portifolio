import {
  Container,
} from '@chakra-ui/react';
import Menu from '../components/menu.jsx';
import Rodape from '../components/footer.jsx'
import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  return (
    <Menu >
      <Container maxW={'7xl'}>
        
      </Container>
      <Rodape />
    </Menu>

  );
}
