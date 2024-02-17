import { MotionValue, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import openSans from '@/utils/assets/fonts/OpenSans'

interface Params {
    scrollY: MotionValue<number>
}

export default function WelcomeText({ scrollY }: Params) {
    const style = {
        opacity: useTransform(scrollY, [0, 0.6], [1, 0]),
        y: useTransform(scrollY, [0, 0.6], [0, -200])
    }

    return (<motion.article style={style} className={styles.welcomeText}>
        <h1 style={openSans.style} className={styles.welcomeText__name}>
            MISEENSCREEN
        </h1>
        <h3 className={styles.welcomeText__description}>
            Adaptation of ideas for your business and activities
        </h3>
        <h2 className={styles.welcomeText__subtext}>Web app development</h2>
    </motion.article>)
}