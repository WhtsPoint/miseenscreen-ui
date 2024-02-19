import { Navigation } from '@/widgets/footer'
import { useTranslations } from 'next-intl'

export default function Official() {
    const t = useTranslations('footer.official')

    return (<Navigation title={t('title')} links={[
        { href: '#', text: t('policy') },
        { href: '#', text: t('terms') }
    ]} />)
}