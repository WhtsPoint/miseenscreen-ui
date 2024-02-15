import { Comment } from '@/widgets/services'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

export default function ECommerce() {
    const t = useTranslations('services.ecommerce')
    //const [isCommentAnimate, setIsCommentAnimate] = useState<boolean>(true)

    return (<section className={styles.eCommerce}>
        <h2 className={sectionStyles.title}>{t('title')}</h2>
        <ul className={sectionStyles.props}>
            {Object.values(t.raw('props')).map((item, index) => {
                return <li key={index} className={sectionStyles.props__item}>{item as string}</li>
            })}
        </ul>
        <div data-tag={'hl'} className={sectionStyles.line} />
        <p data-tag={'description'} className={sectionStyles.paragraph}>{t('description.0')}</p>
        <Comment isAnimate={true} text={t('description.1')} />
    </section>)
}