import blogStyles from '@/utils/assets/styles/blog.module.scss'
import { getTranslations } from 'next-intl/server'
import elon from '@/utils/assets/images/blog/what2/elon.jpeg'
import truman from '@/utils/assets/images/blog/what2/truman.png'
import gosling from '@/utils/assets/images/blog/what2/gosling.gif'
import { ArticlePicture } from '@/widgets/blog'
import { Link } from '@/utils/lib/navigation'
import styles from './styles.module.scss'

export default async function What2Blog() {
    const t = await getTranslations('blogs.content')

    return (<div className={blogStyles.main}>

        <p className={blogStyles.init}>{t('general.init')}</p>
        <ArticlePicture image={elon} caption={t('company-consciousness-2.img-caption.0')} />
        <b className={blogStyles.bold}>{t('company-consciousness-2.bold.0')}</b>
        <p>{t('company-consciousness-2.paragraph.0')}</p>
        <p>{t('company-consciousness-2.paragraph.1')}</p>
        <h2>{t('company-consciousness-2.subtitle.0')}</h2>
        <p>{t('company-consciousness-2.paragraph.2')}</p>
        <h3>{t('company-consciousness-2.subtitle.1')}</h3>
        <ul>
            {Object.values(t.raw('company-consciousness-2.list.0')).map((item, index) => {
                return (<li key={index}>{item as string}</li>)
            })}
        </ul>
        <p>{t('company-consciousness-2.paragraph.3')}</p>
        <p>{t('company-consciousness-2.paragraph.4')}</p>
        <p>{t('company-consciousness-2.paragraph.5')}</p>
        <p>{t('company-consciousness-2.paragraph.6')}</p>
        <p>{t('company-consciousness-2.paragraph.7')}</p>
        <p><i>{t('company-consciousness-2.paragraph.8')}</i></p>
        <ArticlePicture image={truman} caption={t('company-consciousness-2.img-caption.1')} />
        <h3>{t('company-consciousness-2.subtitle.2')}</h3>
        <p>{t('company-consciousness-2.paragraph.9')}</p>
        <p>{t('company-consciousness-2.paragraph.10')}</p>
        <p>{t('company-consciousness-2.paragraph.11')}</p>
        <p>{t('company-consciousness-2.paragraph.12')}</p>
        <p>
            {t('company-consciousness-2.paragraph.13')}
            &nbsp;
            <Link className={blogStyles.link} href={'#'}>
                {t('company-consciousness-2.link.0')}
            </Link>
        </p>
        <div>
            <ArticlePicture
                className={styles.gosling} image={gosling}
                caption={t('company-consciousness-2.img-caption.2')}
            />
            <h3>{t('company-consciousness-2.subtitle.3')}</h3>
            <p>{t('company-consciousness-2.paragraph.14')}</p>
            <p>{t('company-consciousness-2.paragraph.15')}</p>
            <p>{t('company-consciousness-2.paragraph.16')}</p>
            <p>{t('company-consciousness-2.paragraph.17')}</p>
            <p>{t('company-consciousness-2.paragraph.18')}</p>
            <p>{t('company-consciousness-2.paragraph.19')}</p>
            <p>{t('company-consciousness-2.paragraph.20')}</p>
            <p>{t('company-consciousness-2.paragraph.21')}</p>
            <p>{t('company-consciousness-2.paragraph.22')}</p>
            <p dangerouslySetInnerHTML={{ __html: t.raw('company-consciousness-2.paragraph.23') }} />
        </div>
    </div>)
}