import { getLocale } from 'next-intl/server'
import { ArticlePicture } from '@/widgets/blog'
import { createTranslator } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import { staticBlogElements } from '../../utils/static-blog-elements'
import { cl } from '@/utils/lib/cl'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import styles from './styles.module.scss'
import elon from '@/utils/assets/images/blog/what2/elon.jpeg'
import truman from '@/utils/assets/images/blog/what2/truman.gif'
import gosling from '@/utils/assets/images/blog/what2/gosling.gif'

interface Params {
    content: string
}

export default async function What2Blog({ content }: Params) {
    const locale = await getLocale()
    const t = createTranslator({ locale, messages: { content } })

    return (<div className={cl(blogStyles.main, styles.article)}>
        {t.rich('content', {
            'first-picture': (chunks) => <ArticlePicture image={elon} caption={chunks?.toString() || ''} />,
            'second-picture': (chunks) => <ArticlePicture image={truman} caption={chunks?.toString() || ''} />,
            'third-picture': (chunks) => <ArticlePicture className={styles.gosling} image={gosling} caption={chunks?.toString() || ''} />,
            'another-article': (chunks) => <Link className={blogStyles.link} href={'#'}>{chunks}</Link>,
            ...staticBlogElements
        })}
    </div>)
}