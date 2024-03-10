import { ReCaptchaModal, ReCaptchaProvider } from '@/features/re-captcha'
import { NextIntlClientProvider } from 'next-intl'
import TranslatedHeader from '@/features/header/ui/TranslatedHeader'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import styles from './styles/root.module.scss'
import './styles/global.scss'

export default function DefaultLayout({ children, params }: Children<ReactNode> & any) {
    let { locale } = params

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