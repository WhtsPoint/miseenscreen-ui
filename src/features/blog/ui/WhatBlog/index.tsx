import { ArticlePicture } from '@/widgets/blog'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/utils/lib/navigation'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import poorThingsImage from '@/utils/assets/images/blog/what/poor-things.gif'
import iRobotImage from '@//utils/assets/images/blog/what/i-robot.gif'
import soulImage from '@/utils/assets/images/blog/what/soul.gif'

export default async function WhatBlog() {
    const t = await getTranslations('blogs.content')

    return (<div className={blogStyles.main}>
        <ArticlePicture image={poorThingsImage} caption={t('company-consciousness.img-caption.0')} />
        <h2>{t('company-consciousness.subtitle.0')}</h2>
        <p>{t('company-consciousness.paragraph.0')}</p>
        <b className={blogStyles.bold}>{t('company-consciousness.bold.0')}</b>
        <ArticlePicture image={iRobotImage} caption={t('company-consciousness.img-caption.1')} />
        <p className={blogStyles.paragraph_wrap}>{t('company-consciousness.paragraph.1')}</p>
        <p>{t('company-consciousness.paragraph.2')}</p>
        <b className={blogStyles.bold}>{t('company-consciousness.bold.1')}</b>
        <ArticlePicture image={soulImage} caption={t('company-consciousness.img-caption.2')} />
        <p>{t('company-consciousness.paragraph.3')}</p>
        <p>{t('company-consciousness.paragraph.4')}</p>
        <Link className={blogStyles.link} href={'company-consciousness-2'}>{t('company-consciousness.link.0')}</Link>
        <p className={blogStyles.init}>{t('general.init')}</p>
    </div>)
}