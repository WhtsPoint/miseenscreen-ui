import { ReCaptchaModal, ReCaptchaProvider } from '@/features/re-captcha'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import TranslatedHeader from '@/features/header/ui/TranslatedHeader'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import styles from './styles/root.module.scss'
import './styles/global.scss'

export default function DefaultLayout({ children, params }: Children<ReactNode> & any) {
    let { locale } = params
    const messages = useMessages()

    return (<html lang={locale}>
        <body style={IBMPlexSans.style} className={styles.root}>
        <ReCaptchaModal />
        <ReCaptchaProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <TranslatedHeader />
                <main className={styles.root__main}>{children}</main>
            </NextIntlClientProvider>
        </ReCaptchaProvider>
        </body>
    </html>)
}