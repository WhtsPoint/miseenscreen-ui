import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import styles from './styles.module.scss'
import { AboutUs } from '@/features/about-us'
import videos from '@/utils/config/videos'

export default function AboutUsSection() {
    return (<section className={styles.aboutUs}>
        <BackgroundVideo src={videos.aboutUs} className={styles.aboutUs__background} />
        <AboutUs />
    </section>)
}