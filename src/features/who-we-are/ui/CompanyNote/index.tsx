'use client'

import useTextAnimation from '../../hooks/useTextAnimation'
import useBackgroundAnimation from '../../hooks/useBackgroundAnimation'
import useOpacityAnimation from '../../hooks/useOpacityAnimation'
import { useTranslations } from 'next-intl'
import { SidePhoto } from '@/widgets/who-we-are'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import lightImage from '@/utils/assets/images/who-we-are/light-2.png'
import videos from '@/utils/config/videos'

export default function CompanyNote() {
    const t = useTranslations('who-we-are.creator-note.5')
    const ref = useOpacityAnimation()
    const backgroundRef = useBackgroundAnimation()
    const textRef = useTextAnimation()

    return (<section ref={ref} className={cl(styles.companyNote, globalStyles.section, globalStyles.sectionWithSidePhoto)}>
        <div ref={backgroundRef} style={{ display: 'contents', position: 'relative' }}>
            <SidePhoto
                className={globalStyles.background}
                photoClassName={globalStyles.photo}
                type={'video/mp4'}
                src={videos.light}
            />
            <div ref={textRef} className={cl(styles.text, globalStyles.centerText)}>
                {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
            </div>
            <Image
                fill
                priority
                sizes={'100vw'}
                data-tag={'light'}
                className={styles.lightImage}
                src={lightImage.src}
                alt={''}
            />
        </div>
    </section>)
}