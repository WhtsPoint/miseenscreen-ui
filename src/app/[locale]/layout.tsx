import { ReCaptchaModal, ReCaptchaProvider } from '@/features/re-captcha'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { LocaleWindowWrapper } from '@/features/locale-window'
import { HeaderWithContacts } from '@/layers/header'
import type { Children } from '@/utils/interfaces/Children'
import useCertainMessages from '@/app/hooks/useCertainIntlMessages'
import type { ReactNode } from 'react'
import { cl } from '@/utils/lib/cl'
import config from '@/utils/config'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import styles from './styles/root.module.scss'
import './styles/global.scss'

export function generateStaticParams() {
    return config.locale.locales.map((locale) => ({locale}));
}

const messageKeys = [
    'header',
    'stack',
    'search'
] as const satisfies string[]

export default function DefaultLayout({ children, params }: Children<ReactNode> & any) {
    let { locale } = params

    unstable_setRequestLocale(locale);

    const messages = useCertainMessages(messageKeys)

    return (<html lang={locale}>
    <body className={cl(styles.root, IBMPlexSans.variable)}>
    <ReCaptchaModal />
        <ReCaptchaProvider>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <LocaleWindowWrapper>
                        <HeaderWithContacts />
                        <main className={styles.root__main}>
                            {children}
                        </main>
                    </LocaleWindowWrapper>
                </NextIntlClientProvider>
        </ReCaptchaProvider>
    </body>
    </html>)
}