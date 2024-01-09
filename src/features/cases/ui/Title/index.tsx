import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import { motion, MotionValue, useTransform } from 'framer-motion'

interface Params {
    scrollProgress: MotionValue<number>
}

export default function Title({ scrollProgress }: Params) {
    const t = useTranslations('cases')
    const x = useTransform(scrollProgress, [0.4, 0.5], [200, 0])
    const opacity = useTransform(scrollProgress, [0.4, 0.5], [0, 1])

    return (<motion.h2 style={{ x, opacity }} className={styles.title}>{t('title')}</motion.h2>)
}