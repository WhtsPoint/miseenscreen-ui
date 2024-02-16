'use client'

import { useTranslations } from 'next-intl'
import { Description, Hl, PropsWithDescription, Service, Title } from '@/widgets/services'
import { Prop } from '@/widgets/services/intefaces/Prop'

export default function WebPortals() {
    const t = useTranslations('services.web-portals')

    return (<Service>
        <Title>{t('title')}</Title>
        <Description>{t('subtitle')}</Description>
        <Hl />
        <PropsWithDescription props={t.raw('props') as Prop[]} />
    </Service>)
}