import { ArticlePicture } from '@/widgets/blog'
import { getLocale } from 'next-intl/server'
import { Link } from '@/utils/lib/navigation'
import { createTranslator } from 'next-intl'
import { staticBlogElements } from '../../utils/static-blog-elements'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import poorThingsImage from '@/utils/assets/images/blog/what/poor-things.gif'
import iRobotImage from '@//utils/assets/images/blog/what/i-robot.gif'
import soulImage from '@/utils/assets/images/blog/what/soul.gif'

interface Params {
    content: string
}

export default async function WhatBlog({ content }: Params) {
    const locale = await getLocale()
    const t = createTranslator({ locale, messages: { content } })

    return (<div className={blogStyles.main}>
        {t.rich('content', {
            'first-picture': (chunks) => <ArticlePicture image={poorThingsImage} caption={chunks?.toString() || ''} />,
            'second-picture': (chunks) => <ArticlePicture image={iRobotImage} caption={chunks?.toString() || ''} />,
            'third-picture': (chunks) => <ArticlePicture image={soulImage} caption={chunks?.toString() || ''} />,
            'second-part': (chunks) => <Link className={blogStyles.link} href={'company-consciousness-2'}>{chunks}</Link>,
            ...staticBlogElements
        })}
    </div>)
}