import { ArticleTableWithButtonAndLogo, getAllBlogsPreviewsV2 } from '@/features/blog'
import { getLocale } from 'next-intl/server'
import { CertainSectionWrapper } from '@/layers/main'

const blogsCount = 6

export default async function BlogSection() {
    const locale = await getLocale()
    const blogs = await getAllBlogsPreviewsV2(locale, blogsCount)

    return (<CertainSectionWrapper>
            <ArticleTableWithButtonAndLogo blogs={blogs} />
    </CertainSectionWrapper>)
}