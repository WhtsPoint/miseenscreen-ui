import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion, useMotionValueEvent, useTransform } from 'framer-motion'
import useTextTyping from '@/utils/hooks/useTextTyping'
import { useEffect } from 'react'
import BackgroundVideo from '@/utils/ui/BackgroundVideo'

interface Params {
    className?: string,
    isInView?: boolean
}

const videoLink = 'https://drive.google.com/uc?export=download&id=1foaVTyFh0DJnQNms4WswgdZNkaQcczNW'

export default function TitleBlock({ className, isInView }: Params) {
    const [text, trigger, restart] = useTextTyping({
        text: 'Cooperation With Missenscreen',
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
        <BackgroundVideo src={videoLink} className={styles.titleBlock__video} />
        <h2 className={styles.titleBlock__title}>
            <motion.b className={styles.titleBlock__title__big}>{upperText}</motion.b>
            <motion.span className={styles.titleBlock__title__small}>{middleText}</motion.span>
            <motion.b className={styles.titleBlock__title__middle}>{bottomText}</motion.b>
        </h2>
    </div>)
}