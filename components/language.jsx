import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';
import Link from 'next/link';
import { IoLanguage } from "react-icons/io5";

const SwitchLanguage = () => {
    const { locales, defaultLocale } = i18nConfig;
    const { t, lang } = useTranslation('common');

    function usePersistLocaleCookie() {
        const { locale, defaultLocale } = useRouter()

        useEffect(persistLocaleCookie, [locale, defaultLocale])
        function persistLocaleCookie() {
            if (locale !== defaultLocale) {
                const date = new Date()
                const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
                date.setTime(date.getTime() + expireMs)
                document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
            }
        }
    }

    return (
        <main onLoad={usePersistLocaleCookie}>
            <Menu>
                <MenuButton display={{ xl: 'inline-block', md: 'none', sm: 'none' }}
                    p='2'
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    m='10px'
                    fontSize={'sm'}
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ boxShadow: 'outline' }}
                    id="dropdown-basic-button">{t("menu")}</MenuButton>
                <MenuList minW={'4.5vw'} fontSize='sm'>
                    {locales.map(lng => {
                        if (lng === lang) return null;
                        return (
                            <Link href="" locale={lng} key={lng}>
                                {t("language-name")}
                            </Link>
                        );
                    })}
                </MenuList>
            </Menu>
            <Menu >
                <MenuButton display={{ xl: 'none', sm: 'inline-block' }}
                    p='2'
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    color={'gray.300'}
                    m='10px'
                    fontSize={'lg'}
                    _hover={{ bg: 'gray.400' }}
                    _focus={{ boxShadow: 'outline' }}
                    id="dropdown-basic-button"><IoLanguage /></MenuButton>
                <MenuList>
                    {locales.map(lng => {
                        if (lng === lang) return null;
                        return (
                            <Link href="" locale={lng} key={lng}>
                                {t("language-name")}
                            </Link>
                        );
                    })}
                </MenuList>
            </Menu>
        </main>
    );
};

export default SwitchLanguage;