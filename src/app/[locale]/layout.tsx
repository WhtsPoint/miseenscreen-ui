import { Children } from '@/utils/interfaces/Children'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import styles from './styles/root.module.scss'
import { Header } from '@/features/header'
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import './styles/global.scss'
import config from '@/utils/config'

export default function DefaultLayout({ children, params }: Children<ReactNode> & any) {
    const { locale } = params

    if (!config.locale.locales.includes(locale)) notFound()

    return (<html lang={locale}>
        <body style={IBMPlexSans.style} className={styles.root}>
            <Header />
            <main className={styles.root__main}>{children}</main>
        </body>
    </html>)
}