import { getAllBlogsId, getBlogById } from '@/features/blog'
import { BlogPage } from '@/layers/blog'
import { Metadata } from 'next'

interface Params {
    params: {
        id: string,
        locale: string
    }
}

export async function generateMetadata({ params: { id, locale } }: Params): Promise<Metadata> {
    const { title, description } = await getBlogById(locale, id)

    return { title, description }
}

export async function generateStaticParams() {
    return (await getAllBlogsId()).map((id) => ({ id }))
}

export default async function Page({ params: { id } }: Params) {
   return <BlogPage blogId={id} />
}