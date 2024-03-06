import { ArticlePicture } from '@/widgets/blog'
import { getTranslations } from 'next-intl/server'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import poorThingsImage from '@/utils/assets/images/blog/what/poor-things.jpeg'
import iRobotImage from '@//utils/assets/images/blog/what/i-robot.jpeg'

export default async function WhatBlog() {
    const t = await getTranslations('blogs.content')

    return (<div className={blogStyles.main}>
        <ArticlePicture image={poorThingsImage} caption={t('what.img-caption.0')} />
        <p className={blogStyles.init}>{t('general.init')}</p>
        <h2>{t('what.subtitle.0')}</h2>
        <p>{t('what.paragraph.0')}</p>
        <b>{t('what.bold.0')}</b>
        <ArticlePicture image={iRobotImage} caption={t('what.img-caption.1')} />
        <p>{t('what.paragraph.1')}</p>

    </div>)
}