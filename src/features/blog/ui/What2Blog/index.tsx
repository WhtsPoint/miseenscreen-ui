import { getLocale } from 'next-intl/server'
import { ArticlePicture } from '@/widgets/blog'
import { createTranslator } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import elon from '@/utils/assets/images/blog/what2/elon.jpeg'
import truman from '@/utils/assets/images/blog/what2/truman.gif'
import styles from './styles.module.scss'
import gosling from '@/utils/assets/images/blog/what2/gosling.gif'
import { cl } from '@/utils/lib/cl'

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
            'ul': (chunks) => <ul>{chunks}</ul>,
            'li': (chunks) => <li>{chunks}</li>,
            'init': (chunks) => <p className={blogStyles.init}>{chunks}</p>,
            'h2': (chunks) => <h2>{chunks}</h2>,
            'h3': (chunks) => <h3>{chunks}</h3>,
            'p': (chunks) => <p>{chunks}</p>,
            'b': (chunks) => <b className={blogStyles.bold}>{chunks}</b>,
            'i': (chunks) => <i>{chunks}</i>
        })}
    </div>)
}