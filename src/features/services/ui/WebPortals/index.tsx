import sectionStyles from '@/utils/assets/styles/services.module.scss'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { PropsWithDescription } from '@/widgets/services'
import { Prop } from '@/widgets/services/intefaces/Prop'

export default function WebPortals() {
    const t = useTranslations('services.web-portals')

    return (<section className={styles.webPortals}>
        <h2 className={sectionStyles.title}>{t('title')}</h2>
        <p>{t('subtitle')}</p>
        <div className={sectionStyles.line} />
        <PropsWithDescription props={t.raw('props') as Prop[]} />
    </section>)
}