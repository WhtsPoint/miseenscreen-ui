import getBlogsWithExclude from '../../api/getBlogsWithExclude'
import { getLocale } from 'next-intl/server'
import type { BlogPreviewV2 } from '@/widgets/blog'
import { ArticleTableWithButtonAndLogo } from '@/features/blog'

interface Params {
    id: BlogPreviewV2['id']
}

export default async function BlogOtherArticles({ id }: Params) {
    const locale = await getLocale()
    const blogs = await getBlogsWithExclude(locale, [id])

    return blogs.length > 0 && <ArticleTableWithButtonAndLogo blogs={blogs} />
    //     <aside className={styles.otherBlogs}>
    //     {/*<h2 className={styles.otherBlogs__title}>Other Blogs</h2>*/}
    //     <Bl className={styles.otherBlogs__list} blogs={blogs} />
    // </aside>)
}