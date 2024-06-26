import { useTranslations } from 'next-intl'
import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import videos from '@/utils/config/videos'
import { ScrollPoint } from '@/features/philosophy'
import type { MotionValue } from 'framer-motion'
import styles from './styles.module.scss'

interface Params {
    scrollProgress: MotionValue<number>
    onLeft?: () => unknown,
    onRight?: () => unknown
}

export default function PhilosophySection(
    { scrollProgress, onLeft, onRight }: Params
) {
    const t = useTranslations('philosophy')

    return (<section className={styles.section}>
        <BackgroundVideo
            className={styles.section__video}
            videoClass={styles.section__video__content}
            src={videos.philosophy}
        />
        <div className={styles.section__information}>
            <ScrollPoint
                className={styles.section__information__point}
                scrollProgress={scrollProgress}
                onLeft={onLeft}
                onRight={onRight}
            />
            <h2 className={styles.section__information__title}>{t('title')}</h2>
        </div>
    </section>)
}
