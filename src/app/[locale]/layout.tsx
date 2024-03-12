import { ReCaptchaModal, ReCaptchaProvider } from '@/features/re-captcha'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import TranslatedHeader from '@/features/header/ui/TranslatedHeader'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import styles from './styles/root.module.scss'
import config from '@/utils/config'
import './styles/global.scss'

export function generateStaticParams() {
    return config.locale.locales.map((locale) => ({locale}));
}

export default function DefaultLayout({ children, params }: Children<ReactNode> & any) {
    let { locale } = params

    unstable_setRequestLocale(locale);

    return (<html lang={locale}>
    <body style={IBMPlexSans.style} className={styles.root}>
    <ReCaptchaModal />
        <ReCaptchaProvider>
            <NextIntlClientProvider locale={locale}>
                <TranslatedHeader />
                <main className={styles.root__main}>{children}</main>
            </NextIntlClientProvider>
        </ReCaptchaProvider>
    </body>
    </html>)
}