import { Navigation } from '@/widgets/footer'
import { useTranslations } from 'next-intl'
import config from '@/utils/config'

export default function Official() {
    const t = useTranslations('footer.official')

    return (<Navigation title={t('title')} links={[
        { href: config.routes.privacyPolicy, text: t('policy') },
        { href: '#', text: t('terms') }
    ]} />)
}