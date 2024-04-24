import { Navigation } from '@/widgets/footer'
import { useTranslations } from 'next-intl'
import config from '@/utils/config'

export default function Support() {
    const t = useTranslations('footer.support')

    return (<Navigation title={t('title')} links={[
        { href: '', text: t('graphic') },
        { href: 'mailto:' + config.contacts.email, text: t('contact') },
    ]} />)
}