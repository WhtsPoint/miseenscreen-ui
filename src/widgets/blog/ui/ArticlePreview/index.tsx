import type { BlogPreview } from '../../interfaces/BlogPreview'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import { forwardRef } from 'react'
import { motion, type MotionStyle } from 'framer-motion'
import styles from './styles.module.scss'

interface Params {
    blog: BlogPreview,
    onClick?: () => unknown,
    className?: string,
    onInViewChange?: (isInView: boolean) => unknown,
    //Put here the motion styles, to make next render initial styles. IDK why its works like this
    style: MotionStyle
}

const ArticlePreview = forwardRef<HTMLDivElement, Params>((
    { blog: { title, previewCover }, style, onClick, className },
    ref
) => {
    const { src, width, height } = previewCover

    return (<motion.article ref={ref} style={style} onClick={onClick} className={cl(styles.articlePreview, className)}>
        <Image
            className={styles.articlePreview__cover}
            {...{ src, width, height }}
            alt={`"${title}" blog cover`}
        />
        <div className={styles.articlePreview__info}>
            <h3 className={styles.articlePreview__info__title}>{title}</h3>
        </div>
    </motion.article>)
})

ArticlePreview.displayName = 'ArticlePreview'

export default motion(ArticlePreview)