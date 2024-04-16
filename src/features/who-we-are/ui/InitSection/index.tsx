'use client'

import useInitSectionAnimation from '../../hooks/useInitSectionAnimation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import daryaImage from '@/utils/assets/images/who-we-are/darya.jpeg'
import signImage from '@/utils/assets/images/who-we-are/sign.png'

export default function InitSection() {
    const t = useTranslations('who-we-are.init')
    const ref = useInitSectionAnimation()

    return (<section ref={ref} className={cl(styles.initSection, globalStyles.section)}>
        <div className={styles.info}>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.location}>{t('location')}</p>
            <blockquote className={styles.quote}>
                <p>{t('quote.text')}</p>
                <cite>{t('quote.source')}</cite>
            </blockquote>
            {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
            <div data-tag={'sign'} className={styles.sign}>
                <Image
                    fill
                    sizes={'(max-width: 300px) 100vw, 300px'}
                    className={styles.signImage}
                    src={signImage.src}
                    alt={'Project manager sign'}
                />
            </div>
        </div>
        <div data-tag={'portrait'} className={styles.photo}>
            <Image
                fill
                sizes={'(max-width: 768px) 100vw, 50vw'}
                className={cl(styles.image, globalStyles.photo)}
                src={daryaImage.src}
                alt={'Project manager Darya image'}
            />
        </div>
    </section>)
}