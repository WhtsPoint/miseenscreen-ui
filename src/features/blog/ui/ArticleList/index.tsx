import { ArticleCarousel } from '@/widgets/blog'
import { useRouter } from '@/utils/lib/navigation'
import config from '@/utils/config'
import getAllBlogsPreviews from '@/features/blog/api/getAllBlogsPreviews'

interface Params {
    className?: string,
}


export default function ArticleList(params: Params) {
    const router = useRouter()

    return (<ArticleCarousel
        blogs={getAllBlogsPreviews()}
        buttonText={'Read More'}
        onClick={(id) => router.push(config.routes.header.blog + '/' + id)}
        {...params}
    />)
}