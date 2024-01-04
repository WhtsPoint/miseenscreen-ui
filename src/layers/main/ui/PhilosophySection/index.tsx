import StickyScroll from '@/utils/ui/StickyScroll'
import { useMotionValue } from 'framer-motion'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { BackgroundVideo, ScrollPoint } from '@/features/philosophy'

export default function PhilosophySection() {
    const scrollProgress = useMotionValue(0)
    const t = useTranslations('philosophy')

    return (<StickyScroll className={styles.stickyScroll} onScroll={(v) => scrollProgress.set(v)}>
        <section className={styles.section}>
            <BackgroundVideo className={styles.section__video} />
            <div className={styles.section__information}>
                <h2 className={styles.section__information__title}>{t('title')}</h2>
                <ScrollPoint className={styles.section__information__point} scrollProgress={scrollProgress} />
            </div>
        </section>
    </StickyScroll>)
}