import blogStyles from '@/utils/assets/styles/blog.module.scss'
import type { ReactNode } from 'react'

const staticBlogElements: Record<string, (chunks: ReactNode) => ReactNode> = {
    'ul': (chunks) => <ul>{chunks}</ul>,
    'li': (chunks) => <li>{chunks}</li>,
    'init': (chunks) => <p className={blogStyles.init}>{chunks}</p>,
    'h2': (chunks) => <h2>{chunks}</h2>,
    'h3': (chunks) => <h3>{chunks}</h3>,
    'p': (chunks) => <p>{chunks}</p>,
    'b': (chunks) => <b className={blogStyles.bold}>{chunks}</b>,
    'i': (chunks) => <i>{chunks}</i>
}

export { staticBlogElements }