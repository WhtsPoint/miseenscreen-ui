'use client'

import { BlogPreviewV2, ArticleTable as NotFilledArticleTable } from '@/widgets/blog'
import { useRouter } from '@/utils/lib/navigation'
import config from '@/utils/config'

interface Params {
    blogs: BlogPreviewV2[],
    className?: string,
    articleClassName?: string
}

export default function ArticleTable(params: Params) {
    const { push } = useRouter()
    const onClick = (blogId: BlogPreviewV2['id']) => {
        push(`${config.routes.blog}/${blogId}`)
    }

    return (<NotFilledArticleTable {...params} onClick={onClick} />)
}