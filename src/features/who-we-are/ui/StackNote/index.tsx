'use client'

import useOpacityAnimation from '../../hooks/useOpacityAnimation'
import useBackgroundAnimation from '../../hooks/useBackgroundAnimation'
import useTextAnimation from '../../hooks/useTextAnimation'
import { useTranslations } from 'next-intl'
import { SidePhoto } from '@/widgets/who-we-are'
import Image from 'next/image'
import videos from '@/utils/config/videos'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import lightImage from '@/utils/assets/images/who-we-are/light-2.png'

export default function StackNote() {
    const t = useTranslations('who-we-are.creator-note.7')
    const ref = useOpacityAnimation()
    const textRef = useTextAnimation()
    const backgroundRef = useBackgroundAnimation()

    return (<section ref={ref} className={cl(styles.stackNote, globalStyles.section, globalStyles.sectionWithSidePhoto)}>
        <div ref={backgroundRef} style={{ display: 'contents', position: 'relative' }}>
            <div ref={textRef} className={cl(styles.text, globalStyles.centerText)}>
                {t.rich('text', { p: (chunk) => <p className={globalStyles.paragraph}>{chunk}</p> })}
            </div>
            <Image
                fill
                sizes={'100vw'}
                data-tag={'light'}
                className={styles.lightImage}
                src={lightImage.src}
                alt={''}
            />
            <SidePhoto
                className={cl(styles.background, globalStyles.background)}
                photoClassName={globalStyles.photo}
                src={videos.projector}
                type={'video/mp4'}
            />
        </div>
    </section>)
}