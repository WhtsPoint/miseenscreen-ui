'use client'

import styles from './style.module.scss'
import openSans from '@/utils/assets/fonts/OpenSans'
import { useAnimate } from 'framer-motion'

export default function WelcomeSection() {
    const [ref, animate] = useAnimate()

    return (<section ref={ref} className={styles.section}>
        <article className={styles.section__article}>
            <h1 style={openSans.style} className={styles.section__article__name}>
                MISEENSCREEN
            </h1>
            <b className={styles.section__article__description}>
                Adaptation of ideas for your business and activities
            </b>
            <b className={styles.section__article__subtext}>
                Web app development
            </b>
        </article>
    </section>)
}