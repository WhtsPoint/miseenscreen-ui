import { getLocale } from 'next-intl/server'
import { ContactUsModalWrapper } from '@/features/contact-us'
import { BlogOtherArticles, getBlogById } from '@/features/blog'
import { Blog, BlogArticle } from '@/widgets/blog'
import { FooterSection } from '@/layers/main'
import styles from './styles.module.scss'

interface Params {
    blogId: Blog['id']
}

export default async function BlogPage({ blogId }: Params) {
    const locale = await getLocale()
    const blog = await getBlogById(locale, blogId)

    return (<ContactUsModalWrapper>
        <div className={styles.blog}>
            <BlogArticle blog={blog}>
                {blog.content}
            </BlogArticle>
            <BlogOtherArticles id={blog.id} />
            <FooterSection className={styles.footer} />
        </div>
    </ContactUsModalWrapper>)
}