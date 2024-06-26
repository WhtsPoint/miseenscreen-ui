'use client'

import { useTranslations } from 'next-intl'
import { Description, Hl, PropsWithDescription, Service, Title } from '@/widgets/services'
import type { Prop } from '@/widgets/services/intefaces/Prop'

export default function WebPortals() {
    const t = useTranslations('services.web-portals')

    return (<Service name={'web-portals'}>
        <Title>{t('title')}</Title>
        <Description>{t('subtitle')}</Description>
        <Hl />
        <PropsWithDescription props={t.raw('props') as Prop[]} />
    </Service>)
}