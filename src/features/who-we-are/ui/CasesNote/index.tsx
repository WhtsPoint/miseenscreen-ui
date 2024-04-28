'use client'

import useOpacityAnimation from '../../hooks/useOpacityAnimation'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import styles from './styles.module.scss'

export default function CasesNote() {
    const t = useTranslations('who-we-are.creator-note.5')
    const ref = useOpacityAnimation()

    return (<section ref={ref} className={cl(styles.casesNote, globalStyles.section)}>
        {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
    </section>)
}