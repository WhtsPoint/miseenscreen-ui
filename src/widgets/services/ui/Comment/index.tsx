'use client'

import Image, { StaticImageData } from 'next/image'
import useTextTyping from '@/utils/hooks/useTextTyping'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import daryaImage from '@/utils/assets/images/about-us/darya.png'

interface Params {
    text: string,
    commentatorImage?: StaticImageData
    isAnimate: boolean,
    textClassName?: string
}

export default function Comment(
    { text, textClassName, commentatorImage = daryaImage, isAnimate }: Params
) {
    const [currentText, start] = useTextTyping({
        text,
        animationOptions: { duration: 5 }
    })

    useEffect(() => { isAnimate && start() }, [start, isAnimate])

    return (<div data-tag={'comment'} className={styles.comment}>
        <div className={styles.comment__start}>
            <Image
                className={styles.comment__start__icon}
                src={commentatorImage}
                alt={'Commentator portrait'}
            />
            <div className={styles.comment__start__line} />
        </div>
        <motion.p className={cl(
            styles.comment__text,
            sectionStyles.paragraph,
            textClassName
        )}>{currentText}</motion.p>
    </div>)
}