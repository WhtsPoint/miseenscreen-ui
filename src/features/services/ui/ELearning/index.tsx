import sectionStyles from '@/utils/assets/styles/services.module.scss'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { Comment } from '@/widgets/services'

// "system": "Learning management system",
//     "portals": "E-learnings portals",
//     "software": "Remote proctoring software",
//     "content-system": "Learning content management system",
//     "solutions":

export default function ELearning() {
    const t = useTranslations('services.elearning')

    return (<section className={styles.eLearning}>
        <div className={styles.eLearning__head}>
            <h2 className={sectionStyles.title}>{t('title')}</h2>
            <ul className={sectionStyles.props}>
                {Object.values(t.raw('props')).map((item, index) => {
                    return <li key={index} className={sectionStyles.props__item}>{item as string}</li>
                })}
            </ul>
            <div className={sectionStyles.line} />
        </div>
        <ul className={sectionStyles.stack}>
            {Object.values(t.raw('stack')).map((item, index) => <li key={index}>{item as string}</li>)}
        </ul>
        <p>{t('description.0')}</p>
        <p>{t('description.1')}</p>
        <Comment
            textClassName={styles.eLearning__comment}
            text={t('comment')}
            isAnimate={true}
        />
    </section>)
}