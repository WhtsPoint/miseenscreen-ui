import { Navigation } from '@/widgets/footer'
import { useTranslations } from 'next-intl'
import { useSpecialSection } from '@/features/main'
import config from '@/utils/config'

export default function Navigate() {
    const t = useTranslations('footer.navigate')
    const { invoke } = useSpecialSection()

    return (<Navigation title={t('title')} links={[
        { href: config.routes.header.services, onClick: () => invoke('services'), scroll: false, text: t('services') },
        { href: config.routes.header.cases, onClick: () => invoke('cases'), scroll: false, text: t('cases') },
        { href: config.routes.header.cooperation, onClick: () => invoke('cooperation'), scroll: false, text: t('cooperation') },
        { href: config.routes.header.ourStory, onClick: () => invoke('our-story'), scroll: false, text: t('our-story') },
        { href: config.routes.header.blog, text: t('blog') },
        { href: config.routes.header.contactUs, text: t('contact-us') }
    ]} />)
}