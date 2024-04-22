import { getLocale } from 'next-intl/server'
import { Link } from '@/utils/lib/navigation'
import { ArticlePicture } from '@/widgets/blog'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import arnoldImage from '@/utils/assets/images/blog/employees-promotion/arnold.gif'
import goslingImage from '@/utils/assets/images/blog/employees-promotion/gosling.gif'
import insideOutImage from '@/utils/assets/images/blog/employees-promotion/inside-out.gif'
import westWorldImage from '@/utils/assets/images/blog/employees-promotion/westworld.gif'
import { createTranslator } from 'next-intl'
import { staticBlogElements } from '../../utils/static-blog-elements'

interface Params {
    content: string
}

export default async function EmployeesPromotionBlog({ content }: Params) {
    const locale = await getLocale()
    const t = createTranslator({ locale, messages: { content } })

    return (<div className={blogStyles.main}>
        {t.rich('content', {
            'first-picture': (chunks) => <ArticlePicture image={goslingImage} caption={chunks?.toString() || ''} />,
            'second-picture': (chunks) => <ArticlePicture image={arnoldImage} caption={chunks?.toString() || ''} />,
            'third-picture': (chunks) => <ArticlePicture image={westWorldImage} caption={chunks?.toString() || ''} />,
            'fourth-picture': (chunks) => <ArticlePicture image={insideOutImage} caption={chunks?.toString() || ''} />,
            'another-article': (chunks) => <Link className={blogStyles.link} href={'#'}>{chunks}</Link>,
            'pb': (chunks) => <p className={blogStyles.bold}>{chunks}</p>,
            ...staticBlogElements
        })}
    </div> )
}