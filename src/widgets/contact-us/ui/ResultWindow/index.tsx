'use client'

import { cl } from '@/utils/lib/cl'
import ResultCircle from '@/utils/ui/ResultCircle'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import styles from './styles.module.scss'
import buttonStyle from '../../../../utils/assets/styles/button.module.scss'
import { StaticImageData } from 'next/image'

interface Params {
    className?: string,
    iconSrc: StaticImageData,
    text: string,
    onBackToForm: () => unknown,
    onBackToHome: () => unknown
}

export default function ResultWindow({ className, onBackToForm, text, onBackToHome, iconSrc }: Params) {
    const t = useTranslations('contact-us.result')
    const ref = useRef<HTMLDivElement>(null)

    return (<div className={styles.center}>
        <div ref={ref} className={cl(styles.successWindow, className)}>
            <ResultCircle iconSrc={iconSrc} className={styles.successWindow__circle} />
            <h2 className={styles.successWindow__title}>{text}</h2>
            <div className={styles.successWindow__buttons}>
                <button onClick={onBackToForm} className={buttonStyle.button}>{t('to-form')}</button>
                <button onClick={onBackToHome} className={buttonStyle.button}>{t('to-home')}</button>
            </div>
        </div>
    </div>)
}