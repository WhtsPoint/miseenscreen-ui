'use client'

import { Comment, Description, Hl, PropsWithDescription, Service, Title } from '@/widgets/services'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'

export default function CustomErp() {
    const t = useTranslations('services.custom-erp')

    return (<Service name={'custom-erp'}>
        <Title>{t('title')}</Title>
        <Description>{t('segments.0.subtitle')}</Description>
        <Hl />
        <PropsWithDescription props={t.raw('segments.0.props')} />
        <Hl />
        <PropsWithDescription props={t.raw('segments.1.props')} />
        <Comment textClassName={styles.customErp__comment} text={t('comment')} isAnimate={true} />
    </Service>)
}