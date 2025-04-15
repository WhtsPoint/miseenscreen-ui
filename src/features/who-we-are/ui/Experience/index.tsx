import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'

export default function Experience() {
    const t = useTranslations('who-we-are.experience')

    return (<section className={cl(styles.experience, globalStyles.section)}>
        <p className={globalStyles.paragraph}><i>{t('text')}</i></p>
        <ul className={styles.list}>
            {Object.values(t.raw('experience')).map((item, index) => {
                return <li key={index} className={globalStyles.item}>{item as string}</li>
            })}
        </ul>
    </section>)
}