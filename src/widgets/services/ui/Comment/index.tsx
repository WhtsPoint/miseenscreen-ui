'use client'

import Image, { type StaticImageData } from 'next/image'
import useTextTyping from '@/utils/hooks/useTextTyping'
import { motion, useInView } from 'framer-motion'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import daryaImage from '@/utils/assets/images/who-we-are/darya.jpeg'
import { useRef } from 'react'

interface Params {
    text: string,
    commentatorImage?: StaticImageData
    isAnimate: boolean,
    textClassName?: string
}

export default function Comment(
    { text, textClassName, commentatorImage: commentatorImageOrUndefined }: Params
) {
    const commentatorImage = commentatorImageOrUndefined || daryaImage
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [currentText, start] = useTextTyping({
        text,
        animationOptions: { duration: 5 }
    })

    const onAnimationComplete = (variant: string) => {
        if (variant !== 'view') return
        start()
    }

    return (<motion.aside
        ref={ref}
        className={styles.comment}
        initial={{ opacity: 0 }}
        animate={isInView && 'view'}
        variants={{ view: { opacity: 1 }}}
        onAnimationComplete={onAnimationComplete}
    >
        <div className={styles.comment__start}>
            <div className={styles.comment__start__avatar}>
                <Image
                    fill
                    className={styles.comment__start__avatar__image}
                    src={commentatorImage.src}
                    sizes={'150px'}
                    alt={'Commentator portrait'}
                />
            </div>
            <div className={styles.comment__start__line} />
        </div>
        <blockquote className={styles.comment__quote}>
            <motion.p className={cl(
                styles.comment__quote__text,
                sectionStyles.paragraph,
                textClassName
            )}>{currentText}</motion.p>
        </blockquote>
    </motion.aside>)
}