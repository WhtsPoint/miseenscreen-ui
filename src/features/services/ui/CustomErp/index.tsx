import { Prop } from '@/widgets/services/intefaces/Prop'
import { Comment, PropsWithDescription } from '@/widgets/services'
import { useTranslations } from 'next-intl'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import styles from './styles.module.scss'

interface Segment {
    subtitle: string,
    props: Prop[]
}

export default function CustomErp() {
    const t = useTranslations('services.custom-erp')

    return (<section className={styles.customErp}>
        <h2 className={sectionStyles.title}>{t('title')}</h2>
        {Object.values<Segment>(t.raw('segments')).map(({ subtitle, props }, index) => {
            return <article key={index} className={styles.customErp__article}>
                <p>{subtitle}</p>
                <div className={sectionStyles.line} />
                <PropsWithDescription props={props} />
            </article>
        })}
        <p>{t('description')}</p>
        <Comment textClassName={styles.customErp__comment} text={t('comment')} isAnimate={true} />
    </section>)
}