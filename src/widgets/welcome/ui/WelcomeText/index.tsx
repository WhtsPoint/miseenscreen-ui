import { MotionValue, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import openSans from '@/utils/assets/fonts/OpenSans'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'

interface Params {
    scrollY: MotionValue<number>
}

export default function WelcomeText({ scrollY }: Params) {
    const t = useTranslations('welcome')

    const style = {
        opacity: useTransform(scrollY, [0, 0.6], [1, 0]),
        y: useTransform(scrollY, [0, 0.6], [0, -200])
    }

    return (<motion.article style={style} className={styles.welcomeText}>
        <h1 style={openSans.style} className={styles.welcomeText__name}>
            MISEENSCREEN
        </h1>
        <h2 className={styles.welcomeText__description}>
            {t('adaptation')}
        </h2>
        <h3 className={styles.welcomeText__subtext}>{t('sub')}</h3>
    </motion.article>)
}