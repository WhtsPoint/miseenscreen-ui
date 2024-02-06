'use client'

import { useHeaderSettings } from '@/widgets/header'
import { useEffect } from 'react'
import { FilledForm, Title } from '@/features/contact-us'
import styles from './styles.module.scss'

export default function ContactUsPage() {
    const { setTheme } = useHeaderSettings()

    useEffect(() => { setTheme('solid') }, [setTheme])


    return (<div className={styles.page}>
        <Title className={styles.page__title} />
        <div className={styles.page__main}>
            <FilledForm className={styles.page__main__form} />
        </div>
    </div>)
}