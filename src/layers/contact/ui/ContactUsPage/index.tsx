'use client'

import { FilledForm, Title } from '@/features/contact-us'
import { HeaderTheme } from '@/features/header'
import styles from './styles.module.scss'

export default function ContactUsPage() {
    return (<>
        <HeaderTheme theme={'solid'} />
        <div className={styles.page}>
            <Title className={styles.page__title} />
            <div className={styles.page__main}>
                <FilledForm formClassName={styles.page__main__form} />
            </div>
        </div>
    </>)
}