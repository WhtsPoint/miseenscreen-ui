import { Navigation } from '@/widgets/footer'
import { useTranslations } from 'next-intl'

export default function Support() {
    const t = useTranslations('footer.support')

    return (<Navigation title={t('title')} links={[
        { href: '#', text: t('graphic') },
        { href: '#', text: t('contact') },
        { href: '#', text: t('personal-info') },
        { href: '#', text: t('cookie') }
    ]} />)
}