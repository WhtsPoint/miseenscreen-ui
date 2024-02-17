'use client'

import { Comment, Props, Service, Title, Description } from '@/widgets/services'
import { useTranslations } from 'next-intl'
import { Hl } from '@/widgets/services'

export default function ECommerce() {
    const t = useTranslations('services.ecommerce')

    return (<Service name={'ecommerce'}>
        <Title>{t('title')}</Title>
        <Props props={t.raw('props') as string[]} />
        <Hl />
        <Description>{t('description.0')}</Description>
        <Comment isAnimate={true} text={t('description.1')} />
    </Service>)
}