'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import useNoteAnimation from '../../hooks/useNoteAnimation'

export default function Note() {
    const t = useTranslations('services.note')
    const [ref, citeRef, quote] = useNoteAnimation({ quoteText: t('quote') })

    return (<section ref={ref} className={styles.note}>
        <h2 className={styles.note__title}>{t('title')}</h2>
        <blockquote className={styles.note__quote}>
            <motion.p className={styles.note__quote__text}>{quote}</motion.p>
            <cite ref={citeRef} className={styles.note__quote__source}>{t('source')}</cite>
        </blockquote>
    </section>)
}
