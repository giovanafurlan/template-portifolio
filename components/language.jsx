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
            <Menu >
                <MenuButton px='2.5'
                    py='2.5'
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    fontSize={'lg'}
                    _focus={{ boxShadow: 'outline' }}
                    id="dropdown-basic-button"><IoLanguage /></MenuButton>
                <MenuList minW={'min-content'}
                    px='2'>
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