import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { useSpecialSection } from '@/features/main'

export default function PassionateDescription() {
    const t = useTranslations('philosophy')
    const { invoke } = useSpecialSection()

    return (<>
        <p>{t('passionate-description')}</p>
        <Link
            style={{ color: 'white', textDecoration: 'underline' }}
            href={config.routes.header.ourStory}
            onClick={() => invoke('our-story')}
            scroll={false}
        >
            {t('passionate-link')}
        </Link>
    </>)
}