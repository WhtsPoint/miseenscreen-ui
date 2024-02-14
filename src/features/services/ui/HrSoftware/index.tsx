import { useTranslations } from 'next-intl'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import styles from './styles.module.scss'


export default function HrSoftware() {
    const t = useTranslations('services.hr-software')

    return (<section className={styles.hrSoftware}>
        <h2 className={sectionStyles.title}>{t('title')}</h2>
        <ul className={sectionStyles.props}>
            {Object.values(t.raw('props')).map((item, index) => {
                return <li key={index} className={sectionStyles.props__item}>{item as string}</li>
            })}
        </ul>
        <div className={sectionStyles.line} />
        <ul className={sectionStyles.stack}>
            {Object.values(t.raw('stack')).map((item, index) => {
                return <li key={index}>{item as string}</li>
            })}
        </ul>
    </section>)
}
