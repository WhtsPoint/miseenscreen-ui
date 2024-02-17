'use client'

import { FooterSection } from '@/layers/main'
import { BackgroundWrapper, CustomErp, Eccomerce, ELearning, HrSoftware, Note, WebPortals } from '@/features/services'
import { useHeaderSettings } from '@/widgets/header'
import styles from './styles.module.scss'
import { useEffect } from 'react'

export default function ServicePage() {
    const { setTheme } = useHeaderSettings()

    useEffect(() => { setTheme('solid') }, [])

    return (<div className={styles.page}>
        <BackgroundWrapper
            servicesClassName={styles.page__content}
            videoClassName={styles.page__background}
        >
            <Eccomerce />
            <ELearning />
            <HrSoftware />
            <CustomErp />
            <WebPortals />
        </BackgroundWrapper>
        <Note />
        <FooterSection />
    </div>)
}