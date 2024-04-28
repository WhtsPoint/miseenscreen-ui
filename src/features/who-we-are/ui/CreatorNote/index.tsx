'use client'

import useCreatorNoteAnimation from '../../hooks/useCreatorNoteAnimation'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import styles from './styles.module.scss'

export default function CreatorNote() {
    const t = useTranslations('who-we-are.creator-note.0')
    const ref = useCreatorNoteAnimation()

    return (<section ref={ref} className={cl(styles.createNote, globalStyles.section)}>
        <div className={styles.text}>
            <h2 className={styles.title}>{t('title')}</h2>
            {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
        </div>
    </section>)
}