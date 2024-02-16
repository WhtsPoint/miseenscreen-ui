'use client'

import { useTranslations } from 'next-intl'
import { Hl, Props, Service, Stack, Title } from '@/widgets/services'

export default function HrSoftware() {
    const t = useTranslations('services.hr-software')

    return (<Service>
        <Title>{t('title')}</Title>
        <Props props={t.raw('props')} />
        <Hl />
        <Stack params={t.raw('stack')} />
    </Service>)
}
