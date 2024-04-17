import { getTranslations } from 'next-intl/server'
import { Link } from '@/utils/lib/navigation'
import { ArticlePicture } from '@/widgets/blog'
import blogStyles from '@/utils/assets/styles/blog.module.scss'
import arnoldImage from '@/utils/assets/images/blog/employees-promotion/arnold.gif'
import goslingImage from '@/utils/assets/images/blog/employees-promotion/gosling.gif'
import insideOutImage from '@/utils/assets/images/blog/employees-promotion/inside-out.gif'
import westWorldImage from '@/utils/assets/images/blog/employees-promotion/westworld.gif'


export default async function EmployeesPromotionBlog() {
    const t = await getTranslations('blogs.content')

    return (<div className={blogStyles.main}>
        <ArticlePicture image={goslingImage} caption={t('employees-promotion.img-caption.3')} />
        <h2>{t('employees-promotion.subtitle.0')}</h2>
        <p>{t('employees-promotion.paragraph.0')}</p>
        <p>{t('employees-promotion.paragraph.1')}</p>
        <p>{t('employees-promotion.paragraph.2')}</p>
        <p>{t('employees-promotion.paragraph.3')}</p>
        <p>{t('employees-promotion.paragraph.4')}</p>
        <h2>{t('employees-promotion.subtitle.1')}</h2>
        <ArticlePicture image={arnoldImage} caption={t('employees-promotion.img-caption.0')} />
        <p>{t('employees-promotion.paragraph.5')}</p>
        <p>{t('employees-promotion.paragraph.6')}</p>
        <p>{t('employees-promotion.paragraph.7')}</p>
        <p>{t('employees-promotion.paragraph.8')}</p>
        <ArticlePicture image={westWorldImage} caption={t('employees-promotion.img-caption.2')} />
        <h2>{t('employees-promotion.subtitle.2')}</h2>
        <p>{t('employees-promotion.paragraph.9')}</p>
        <ul>
            {Object.values(t.raw('employees-promotion.list.0')).map((item, index) => {
                return <li key={index}>{item as string}</li>
            })}
        </ul>
        <p>{t('employees-promotion.paragraph.10')}</p>
        <p>{t('employees-promotion.paragraph.11')}</p>
        <p>{t('employees-promotion.paragraph.12')}</p>
        <p dangerouslySetInnerHTML={{ __html: t.raw('employees-promotion.paragraph.13') }} />
        <ArticlePicture image={insideOutImage} caption={t('employees-promotion.img-caption.1')} />
        <p className={blogStyles.bold}>{t('employees-promotion.bold.0')}</p>
        <Link className={blogStyles.link} href={'#'}>{t('employees-promotion.link.0')}</Link>
        <p className={blogStyles.init}>{t('general.init')}</p>
    </div> )
}