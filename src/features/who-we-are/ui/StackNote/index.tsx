'use client'

import useOpacityAnimation from '../../hooks/useOpacityAnimation'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'

export default function StackNote() {
    const t = useTranslations('who-we-are.creator-note.7')
    const ref = useOpacityAnimation()

    return (<section ref={ref} className={cl(styles.stackNote, globalStyles.section)}>
        {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
    </section>)
}