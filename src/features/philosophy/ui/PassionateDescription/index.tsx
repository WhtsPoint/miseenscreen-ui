import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'

export default function PassionateDescription() {
    const t = useTranslations('philosophy')

    return (<>
        <p>{t('passionate-description')}</p>
        <Link
            style={{ color: 'white', textDecoration: 'underline' }}
            href={config.routes.header.ourStory}
            scroll={true}
        >
            {t('passionate-link')}
        </Link>
    </>)
}