import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion, useMotionValueEvent, useTransform } from 'framer-motion'
import useTextTyping from '@/utils/hooks/useTextTyping'
import { useEffect } from 'react'
import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import videos from '@/utils/config/videos'
import { useTranslations } from 'next-intl'

interface Params {
    className?: string,
    isInView?: boolean
}

export default function TitleBlock({ className, isInView }: Params) {
    const t = useTranslations('cooperation')
    const [text, trigger, restart] = useTextTyping({
        text: t('title'),
        animationOptions: { duration: 3 }
    })

    const splitText = useTransform(text, value => value.split(' '))
    const upperText = useTransform(splitText, value => value[0] ?? '')
    const middleText = useTransform(splitText, value => value[1] ?? '')
    const bottomText = useTransform(splitText, value => value[2] ?? '')

    useEffect(() => {
        isInView ? trigger() : restart()
    }, [isInView, restart, trigger])

    return (<div className={cl(styles.titleBlock, className)}>
        <BackgroundVideo src={videos.cooperation} className={styles.titleBlock__video} />
        <h2 className={styles.titleBlock__title}>
            <motion.b className={styles.titleBlock__title__big}>{upperText}</motion.b>
            <motion.span className={styles.titleBlock__title__small}>{middleText}</motion.span>
            <motion.b className={styles.titleBlock__title__middle}>{bottomText}</motion.b>
        </h2>
    </div>)
}