import { getAllBlogsId, getBlogById } from '@/features/blog'
import { getLocale, getTranslations } from 'next-intl/server'
import { BlogArticle } from '@/widgets/blog'

interface Params {
    params: {
        id: string,
        locale: string
    }
}

export async function generateMetadata({ params: { id, locale } }: Params) {
    const { title, description } = await getBlogById(locale, id)

    return { title, description }
}

export async function generateStaticParams() {
    return (await getAllBlogsId()).map((id) => ({ id }))
}

export default async function Page({ params: { id } }: Params) {
    const locale = await getLocale()
    const blog = await getBlogById(locale, id)
    const t = await getTranslations('blogs.content')

    // if (!Object.keys(staticBlogs).includes(blog.id)) notFound()

    return (<BlogArticle blog={blog}>
        {blog.content}
    </BlogArticle>)
}