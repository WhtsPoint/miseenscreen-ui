import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import styles from './styles.module.scss'
import { AboutUs } from '@/features/about-us'

const videoLink = ''

export default function AboutUsSection() {
    return (<section className={styles.aboutUs}>
        <BackgroundVideo src={videoLink} className={styles.aboutUs__background} />
        <AboutUs />
    </section>)
}