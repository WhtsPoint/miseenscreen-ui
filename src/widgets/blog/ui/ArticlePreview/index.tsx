import { BlogPreview } from '../../interfaces/BlogPreview'
import Image from 'next/image'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface Params {
    blog: BlogPreview,
    onClick?: () => unknown,
    buttonText: string,
    className?: string,
    onInViewChange?: (isInView: boolean) => unknown,
}

const ArticlePreview = motion(forwardRef<HTMLDivElement, Params>((
    { blog: { title, previewCover }, onClick, className },
    ref
) => {
    return (<div ref={ref} onClick={onClick} className={cl(styles.articlePreview, className)}>
            <Image
                className={styles.articlePreview__cover}
                src={previewCover}
                alt={`"${title}" blog cover`}
            />
            <div className={styles.articlePreview__info}>
                <h3 className={styles.articlePreview__info__title}>{title}</h3>
            </div>
    </div>)
}))

ArticlePreview.displayName = 'ArticlePreview'

export default ArticlePreview