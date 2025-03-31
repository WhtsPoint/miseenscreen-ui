import { Comment, Description, Hl, PropsWithDescription, Service, Title } from '@/widgets/services'
import { useTranslations } from 'next-intl'
import type { Prop } from '@/widgets/services/intefaces/Prop'

export default function CRM() {
    const t = useTranslations('services.crm')

    return (<Service name={'crm'}>
        <Title>{t('title')}</Title>
        <Description>{t('subtitle')}</Description>
        <Hl />
        <PropsWithDescription props={t.raw('service-props') as Prop[]} />
        <Comment text={t.raw('comment')} isAnimate={true} />
    </Service>)
}