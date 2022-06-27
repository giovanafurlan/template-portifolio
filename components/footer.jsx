import {
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/router';

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
                    <Stack align={'flex-start'}
                        textTransform='uppercase'
                        fontSize={'14px'}
                        fontWeight='bold'>
                        <Link onClick={() => router.push('/')} href='/'>Home</Link>
                        <Link onClick={() => router.push('/postagens')} href='/postagens'>Blog</Link>
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
            </Container>
        </>
    );
}