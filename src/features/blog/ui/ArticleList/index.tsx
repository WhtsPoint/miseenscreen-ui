'use client'

import { ArticleCarousel, BlogPreview } from '@/widgets/blog'
import { useRouter } from '@/utils/lib/navigation'
import config from '@/utils/config'

interface Params {
    className?: string,
    blogs: BlogPreview[]
}

export default function ArticleList({ blogs, ...params }: Params) {
    const router = useRouter()

    return (<ArticleCarousel
        blogs={blogs}
        onClick={(id) => router.push(config.routes.blog + '/' + id)}
        {...params}
    />)
}