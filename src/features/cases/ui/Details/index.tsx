import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { motion, MotionValue, useTransform } from 'framer-motion'

interface Params {
    scrollProgress: MotionValue<number>
}

export default function Details({ scrollProgress }: Params) {
    const t = useTranslations('cases')
    const x = useTransform(scrollProgress, [0.3, 0.4], [-200, 0])
    const opacity = useTransform(scrollProgress, [0.3, 0.4], [0, 1])

    return (<motion.div style={{ x, opacity }} className={styles.details}>
        <h3 className={styles.details__subTitle}>{t('sub-title')}</h3>
        <p className={styles.details__text}>{t('text')}</p>
    </motion.div>)
}