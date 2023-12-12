import { Children } from '@/utils/interfaces/Children'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import { NextIntlClientProvider } from 'next-intl'
import { Header } from '@/features/header'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import config from '@/utils/config'
import styles from './styles/root.module.scss'
import './styles/global.scss'



export default function DefaultLayout({ children, params }: Children<ReactNode> & any) {
    const { locale } = params

    if (!config.locale.locales.includes(locale)) notFound()

    return (<html lang={locale}>
        <body style={IBMPlexSans.style} className={styles.root}>
        <NextIntlClientProvider locale={locale}>
            {/*<Contacts />*/}
            <Header />
            <main className={styles.root__main}>{children}</main>
        </NextIntlClientProvider>
        </body>
    </html>)
}