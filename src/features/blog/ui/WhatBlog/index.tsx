import { ArticlePicture } from '@/widgets/blog'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/utils/lib/navigation'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import poorThingsImage from '@/utils/assets/images/blog/what/poor-things.jpeg'
import iRobotImage from '@//utils/assets/images/blog/what/i-robot.jpeg'
import soulImage from '@/utils/assets/images/blog/what/soul.jpeg'

export default async function WhatBlog() {
    const t = await getTranslations('blogs.content')

    return (<div className={blogStyles.main}>
        <ArticlePicture image={poorThingsImage} caption={t('what.img-caption.0')} />
        <p className={blogStyles.init}>{t('general.init')}</p>
        <h2>{t('what.subtitle.0')}</h2>
        <p>{t('what.paragraph.0')}</p>
        <b className={blogStyles.bold}>{t('what.bold.0')}</b>
        <ArticlePicture image={iRobotImage} caption={t('what.img-caption.1')} />
        <p>{t('what.paragraph.1')}</p>
        <p>{t('what.paragraph.2')}</p>
        <b className={blogStyles.bold}>{t('what.bold.1')}</b>
        <ArticlePicture image={soulImage} caption={t('what.img-caption.2')} />
        <p>{t('what.paragraph.3')}</p>
        <p>{t('what.paragraph.4')}</p>
        <Link className={blogStyles.link} href={'#'}>{t('what.link.0')}</Link>
    </div>)
}