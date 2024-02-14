import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'

export default function Note() {
    const t = useTranslations('services.note')

    return (<section className={styles.note}>
        <h2 className={styles.note__title}>{t('title')}</h2>
        <blockquote className={styles.note__quote}>
            <p className={styles.note__quote__text}>{t('quote')}</p>
            <cite className={styles.note__quote__source}>{t('source')}</cite>
        </blockquote>
    </section>)
}