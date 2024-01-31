'use client'

import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { useHeaderSettings } from '@/widgets/header'
import { useEffect } from 'react'
import { FilledForm } from '@/features/contact-us'

export default function ContactUsPage() {
    const t = useTranslations('contact-us')
    const { setTheme } = useHeaderSettings()

    useEffect(() => { setTheme('solid') }, [setTheme])

    return (<div className={styles.page}>
        <h1 className={styles.page__title}>{t('title')}</h1>
        <div className={styles.page__main}>
            <FilledForm className={styles.page__main__form} />
        </div>
    </div>)
}