'use client'

import useTextAnimation from '../../hooks/useTextAnimation'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import styles from './styles.module.scss'
import useOpacityAnimation from '../../hooks/useOpacityAnimation'

export default function CodeNote() {
    const t = useTranslations('who-we-are.creator-note.1')
    const ref = useOpacityAnimation()
    const textRef = useTextAnimation()

    return (<section ref={ref} className={cl(styles.codeNote, globalStyles.section)}>
        {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
    </section>)
}