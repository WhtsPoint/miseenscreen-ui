'use client'

import { useTranslations } from 'next-intl'
import { Comment, Description, Hl, Props, Service, Stack, Title } from '@/widgets/services'
import styles from './styles.module.scss'

export default function ELearning() {
    const t = useTranslations('services.elearning')

    return (<Service>
        <Title>{t('title')}</Title>
        <Props props={t.raw('props')} />
        <Hl />
        <Stack params={t.raw('stack')} />
        <Description>{t('description.0')}</Description>
        <Description>{t('description.1')}</Description>
        <Comment
            textClassName={styles.eLearning__comment}
            text={t('comment')}
            isAnimate={true}
        />
    </Service>)
}