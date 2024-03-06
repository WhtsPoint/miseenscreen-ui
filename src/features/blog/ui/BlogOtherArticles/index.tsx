import ArticleList from '../ArticleList'
import getBlogsWithExclude from '../../api/getBlogsWithExclude'
import { Blog } from '@/widgets/blog'
import { getLocale } from 'next-intl/server'
import styles from './styles.module.scss'

interface Params {
    id: Blog['id']
}

export default async function BlogOtherArticles({ id }: Params) {
    const locale = await getLocale()
    const blogs = await getBlogsWithExclude(locale, [id])

    return blogs.length > 0 && (<aside className={styles.otherBlogs}>
        <h2 className={styles.otherBlogs__title}>Other Blogs</h2>
        <ArticleList className={styles.otherBlogs__list} blogs={blogs} />
    </aside>)
}