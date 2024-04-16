'use client'

import useBackgroundAnimation from '../../hooks/useBackgroundAnimation'
import useOpacityAnimation from '../../hooks/useOpacityAnimation'
import useTextAnimation from '../../hooks/useTextAnimation'
import CasesBackground from '../CasesBackground'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import styles from './styles.module.scss'
import lightImage from '@/utils/assets/images/who-we-are/light-4.png'

export default function CasesNote() {
    const t = useTranslations('who-we-are.creator-note.4')
    const ref = useOpacityAnimation()
    const textRef = useTextAnimation()
    const backgroundRef = useBackgroundAnimation()

    return (<section ref={ref} className={cl(styles.casesNote, globalStyles.section)}>
        <div ref={backgroundRef} style={{ display: 'contents' }}>
            <div ref={textRef} className={cl(styles.text, globalStyles.centerText)}>
                {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
            </div>
            <CasesBackground className={styles.casesBackground} backgroundClassName={styles.background} />
            <Image fill sizes={'100vw'} data-tag={'light'} className={styles.lightImage} src={lightImage.src} alt={''} />
        </div>
    </section>)
}