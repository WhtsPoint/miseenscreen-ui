import { Navigation } from '@/widgets/footer'
import { useTranslations } from 'next-intl'

export default function SocialMedia() {
    const t = useTranslations('footer.social')

    return (<Navigation title={t('title')} links={[
        { href: '#', text: 'Instagram' },
        { href: '#', text: 'Facebook' },
        { href: '#', text: 'Youtube' },
        { href: '#', text: 'Twitter' }
    ]} />)
}