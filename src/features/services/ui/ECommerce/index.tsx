import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import Image from 'next/image'
import daryaImage from '@/utils/assets/images/about-us/darya.png'

export default function ECommerce() {
    const t = useTranslations('services.ecommerce')

    return (<section className={styles.eCommerce}>
        <h1 className={sectionStyles.title}>{t('title')}</h1>
        <ul className={sectionStyles.props}>
            <li className={sectionStyles.props__item}>{t('props.web')}</li>
            <li className={sectionStyles.props__item}>{t('props.marketplaces')}</li>
            <li className={sectionStyles.props__item}>{t('props.progressive-web')}</li>
            <li className={sectionStyles.props__item}>{t('props.headless')}</li>
        </ul>
        <hr className={sectionStyles.line} />
        <p className={sectionStyles.paragraph}>{t('description-1')}</p>
        <div className={styles.eCommerce__comment}>
            <Image
                className={styles.eCommerce__comment__icon}
                src={daryaImage}
                alt={'Commentator portrait'}
            />
            <div className={styles.eCommerce__comment__line} />
            <p className={sectionStyles.paragraph}>{t('description-2')}</p>
        </div>
    </section>)
}