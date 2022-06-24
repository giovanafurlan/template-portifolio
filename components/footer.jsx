import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Button,
    Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useAmp } from 'next/amp';

function SocialButton({ children, label, href }) {
    return (
        <chakra.button
            color={'white'}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

function ListHeader({ children }) {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {

    const router = useRouter();
    const isAmp = useAmp();

    return (
        <>
            <Container as={Stack}
                maxW={'full'}
                px={{ lg: '40', md: '20', sm: 0 }}
                py={{ lg: '12', md: '8', sm: 0 }}
                bg={'black'}
                color={'white'}
                textAlign='center'
                alignItems={{ lg: 'initial', md: 'center', sm: 'center' }}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr', md: '2fr 2fr 2fr 2fr 1fr' }}
                    spacing={5}>
                    <Stack spacing={6} alignItems='center'>
                        <Box>
                            <img src='/images/logoBranco.webp'
                                alt="Logo WebPeak"
                                width={120}
                                height={80} />
                        </Box>
                        <Text fontSize={'sm'}>
                            Consultoria SEO e Marketing Digital <br />
                            de Alta Performace
                        </Text>
                        <Button pos={'static'}
                            borderRadius={0}
                            size={'lg'}
                            fontWeight={'normal'}
                            p={'1.5vw'}
                            bg={'brand.primary'}
                            w='min-content'
                            textAlign={'initial'}
                            _hover={{ bg: 'purple.500' }}>
                            <Text mr='50px'>Fale com um <br />
                                consultor</Text><ArrowForwardIcon />
                        </Button>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Fale conosco</ListHeader>
                        <Link href={'#'}>dpo@webpeak.com.br</Link>
                        <Link href={'#'}>consultoria@webpeak.com.br</Link>
                        <Link href={'#'}>+55 11 3645-3623</Link>
                    </Stack>
                    <Stack align={'flex-start'} >
                        <ListHeader>Escritório</ListHeader>
                        <Link href={'https://goo.gl/maps/5iNKbzn7Pkkz72UFA'}
                            target='_blank'>Avenida Queiroz Filho, 1560<br />
                            Torre Beija Flor, 2° andar</Link>
                    </Stack>
                    <Stack align={'flex-start'}
                        textTransform='uppercase'
                        fontSize={'14px'}
                        fontWeight='bold'>
                        <Link onClick={() => router.push('/')} href='/'>Home</Link>
                        <Link onClick={() => router.push('/estudoMercado')} href='/estudoMercado'>Estudos de mercado</Link>
                        <Link onClick={() => router.push('/parceiros')} href='/parceiros'>Parceiros</Link>
                        <Link onClick={() => router.push('/segmentos')} href='/segmentos'>Segmentos</Link>
                        <Link onClick={() => router.push('/contato')} href='/contato'>Contato</Link>
                        <Link onClick={() => router.push('/sobre')} href='/sobre'>Sobre</Link>
                        <Link onClick={() => router.push('/blogs')} href='/blogs'>Blog</Link>
                        <Link onClick={() => router.push('/cases')} href='/cases'>Cases</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Stack direction={{ md: 'column', sm: 'row' }} spacing={3}>
                            <SocialButton label={'Facebook'} href={'https://www.facebook.com/webpeakbr'}>
                                <FaFacebook />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'https://www.instagram.com/webpeakbrasil/'}>
                                <FaInstagram />
                            </SocialButton>
                            <SocialButton label={'Linkdin'} href={'https://www.linkedin.com/company/webpeak-brasil/mycompany/'}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label={'Twitter'} href={'https://twitter.com/webpeakbr'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/WebPeakBrasil'}>
                                <FaYoutube />
                            </SocialButton>
                        </Stack>
                    </Stack>
                </SimpleGrid>
                <Flex justifyContent={'space-between'}
                    paddingTop='1vw'
                    direction={{ lg: 'row', md: 'row', sm: 'column' }}>
                    <Box boxSize='120px'
                        objectFit='cover'>
                        <Link href='https://partnerportal.vtex.com/webpeak/p'
                            target={'_blank'}>
                            <img src='/images/vtex.webp'
                                alt="Logo Vtext"
                                width={200}
                                height={80} />
                        </Link>
                    </Box>
                    <Box boxSize='120px'
                        objectFit='cover'>
                        <Link href='https://www.zoho.com/partners/find-partner-profile.html?partnerid=adcf60b7640e415763672e782fcc28f5'
                            target={'_blank'}>
                            <img src='/images/zoho.webp'
                                alt="Logo Zoho"
                                width={200}
                                height={50} />
                        </Link>
                    </Box>
                    <Box boxSize='120px'
                        objectFit='cover'>
                        <Link href='https://www.google.com/partners/agency?id=3114473778'
                            target={'_blank'}>
                            <img src='/images/google.webp'
                                alt="Logo Google"
                                width={200}
                                height={80} />
                        </Link>
                    </Box>
                    <Box boxSize='200px'
                        objectFit='cover'>
                        <Link href='https://certificacao.gptw.info/certificated-company/22268271000165'
                            target={'_blank'}>
                            <img src='/images/greatPlace.webp'
                                alt="Logo certificado"
                                width={200}
                                height={150} />
                        </Link>
                    </Box>
                </Flex>
                <Flex float={'right'}>
                    <Link mr={'1vw'} href='https://www.webpeak.com.br/'
                        target={'_blank'}>Otimizado por WebPeak</Link>
                    <Link href='https://kb.webpeak.com.br/portal/pt/kb/articles/pol%C3%ADtica-de-privacidade-para-webpeak'
                        target={'_blank'}>Política de Privacidade</Link>
                </Flex>
            </Container>
        </>
    );
}