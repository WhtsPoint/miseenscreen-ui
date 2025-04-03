import { useTranslations } from 'next-intl'
import { Props, Title } from '@/widgets/stack'
import { cl } from '@/utils/lib/cl'
import { Link } from '@/utils/lib/navigation'
import Background from './Background'
import config from '@/utils/config'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'

export default function HrSoftware() {
    const t = useTranslations('services.hr-software')

    return (<Link
        href={config.routes.services.hrSoftware}
        className={cl(sectionStyles.section, styles.hrSoftware)}
    >
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={Object.values(t.raw('props'))} />
        </div>
        <Background className={styles.background} />
    </Link>)
}