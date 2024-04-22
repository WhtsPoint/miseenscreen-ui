'use client'

import type { BlogPreview } from '../../interfaces/BlogPreview'
import ArticlePreview from '../ArticlePreview'
import styles from './style.module.scss'
import Arrow from '@/utils/ui/Arrow'
import useCarousel from '@/utils/hooks/useCarousel'
import { cl } from '@/utils/lib/cl'

interface Params {
    blogs: BlogPreview[],
    onClick?: (id: string) => unknown,
    className?: string
}

const getArticleAnimation = (delta: number) => {
    const isCurrent = delta === 0
    return {
        marginLeft: `calc(50% - ${delta * -350}px)`,
        scale: isCurrent ? 1 : 0.8,
        position: isCurrent ? 'static' : 'absolute'
    } as const
}

export default function ArticleCarousel({ blogs, onClick, className, ...params }: Params) {
    const { currentElement: current, onLeft, onRight, choose } = useCarousel({
        elementsCount: blogs.length,
        initElement: Math.floor(blogs.length / 2)
    })

    const onBlogClick = (index: number, id: string) => () => {
        current === index ? onClick?.(id) : choose(index)
    }

    return (<div className={cl(styles.articleCarousel, className)}>
        <Arrow className={styles.articleCarousel__arrow} direction={'left'} onClick={onLeft} />
        <div className={styles.articleCarousel__body}>
            {blogs.map((blog, index) => <ArticlePreview
                            key={blog.id}
                            className={styles.articleCarousel__body__blog}
                            initial={getArticleAnimation(index - current)}
                            animate={getArticleAnimation(index - current)}
                            style={{ x: '-50%' }}
                            transition={{ duration: 0.5 }}
                            onClick={onBlogClick(index, blog.id)}
                            blog={blog}
                            {...params}
            />)}
        </div>
        <Arrow className={styles.articleCarousel__arrow} onClick={onRight} />
    </div>)
}