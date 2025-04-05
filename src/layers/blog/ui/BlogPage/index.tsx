import { getLocale } from 'next-intl/server'
import { ContactUsModalWrapper } from '@/features/contact-us'
import { BlogOtherArticles, getBlogById, renderBlogContent, renderBlogCover } from '@/features/blog'
import { type Blog, BlogArticle } from '@/widgets/blog'
import { FooterSection } from '@/layers/main'
import { ContactUsPage } from '@/layers/contact'
import styles from './styles.module.scss'

interface Params {
    blogId: Blog['id']
}

export default async function BlogPage({ blogId }: Params) {
    const locale = await getLocale()
    const blog = await getBlogById(locale, blogId)

    return (<ContactUsModalWrapper>
        <div className={styles.blog}>
            <BlogArticle cover={renderBlogCover(blog)} blog={blog}>
                {renderBlogContent(blog)}
            </BlogArticle>
            <BlogOtherArticles id={blog.id} />
            <FooterSection className={styles.footer}>
                <ContactUsPage />
            </FooterSection>
        </div>
    </ContactUsModalWrapper>)
}