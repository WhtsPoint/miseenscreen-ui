import type { BlogPreviewV2 } from '../../interfaces/BlogPreviewV2'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import { Fragment } from 'react'

interface Params {
    blog: Omit<BlogPreviewV2, 'id'>,
    className: string,
    titleClassName?: string,
    onClick?: () => unknown
}

export default function ArticlePreviewV2(
    { blog, className, titleClassName, onClick }: Params
) {
    const { title, previewCover, themes } = blog
    const { src, width, height } = previewCover

    return (<motion.button whileHover={'hover'} onClick={onClick} className={cl(styles.articlePreview, className)}>
        <div className={styles.cover}>
            <motion.img
                variants={{ hover: { scale: 1.2 } }}
                transition={{ duration: 0.2, ease: 'linear' }}
                {...{ src, width, height }}
                alt={`"${title}" article cover`} />
        </div>
        <b className={cl(styles.title, titleClassName)}>{title}</b>
            <ul className={styles.themes}>{
                themes.map((theme, index) => {
                    return <Fragment key={index}>
                        <li className={styles.theme}>{theme}</li>
                        {index !== themes.length - 1 ? ' | ' : ''}
                    </Fragment>
                })
            }
            </ul>
    </motion.button>)
}