import { getLocale } from 'next-intl/server'
import { BlogOtherArticles, getBlogById } from '@/features/blog'
import { Blog, BlogArticle } from '@/widgets/blog'
import { FooterSection } from '@/layers/main'

interface Params {
    blogId: Blog['id']
}

export default async function BlogPage({ blogId }: Params) {
    const locale = await getLocale()
    const blog = await getBlogById(locale, blogId)

    return (<>
        <BlogArticle blog={blog}>
            {blog.content}
        </BlogArticle>
        <BlogOtherArticles id={blog.id} />
    </>)
}