import { Navigation } from '@/widgets/footer'
import { useTranslations } from 'next-intl'
import config from '@/utils/config'

export default function SocialMedia() {
    const t = useTranslations('footer.social')

    return (<Navigation title={t('title')} links={[
        { href: config.contacts.instagram, text: 'Instagram' },
        { href: config.contacts.facebook, text: 'Facebook' },
        { href: config.contacts.youtube, text: 'Youtube' },
        { href: config.contacts.twitter, text: 'X Formerly Twitter' }
    ]} />)
}