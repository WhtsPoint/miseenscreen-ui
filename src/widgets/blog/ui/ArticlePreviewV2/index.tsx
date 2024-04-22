import type { BlogPreviewV2 } from '../../interfaces/BlogPreviewV2'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'

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
        <h3 className={cl(styles.title, titleClassName)}>{title}</h3>
            <ul className={styles.themes}>{
                themes.map((theme, index) => {
                    return <li key={index} className={styles.theme}>{theme + (index !== themes.length - 1 ? ', ' : '')}</li>
                })
            }
            </ul>
            {/*<div className={styles.another}>*/}
            {/*    <span>{dateToString(createdAt)}</span>*/}
            {/*    <span>{author}</span>*/}
            {/*</div>*/}
    </motion.button>)
}