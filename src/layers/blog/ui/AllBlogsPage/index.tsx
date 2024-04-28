import { ArticleTableWithLogo, getAllBlogsPreviewsV2 } from '@/features/blog'
import { ContactUsModalWrapper } from '@/features/contact-us'
import { getLocale } from 'next-intl/server'
import { FooterSection } from '@/layers/main'
import { ContactUsPage } from '@/layers/contact'
import styles from './styles.module.scss'

export default async function AllBlogsPage() {
    const locale = await getLocale()
    const blogs = await getAllBlogsPreviewsV2(locale)

    return (<ContactUsModalWrapper>
        <section className={styles.page}>
            <ArticleTableWithLogo blogs={blogs} />
            <FooterSection className={styles.footer}>
                <ContactUsPage />
            </FooterSection>
        </section>
    </ContactUsModalWrapper>)
}