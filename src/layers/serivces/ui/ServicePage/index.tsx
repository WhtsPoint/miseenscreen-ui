import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import { FooterSection } from '@/layers/main'
import { CustomErp, Eccomerce, ELearning, HrSoftware, Note, WebPortals } from '@/features/services'
import videos from '@/utils/config/videos'
import styles from './styles.module.scss'

export default function ServicePage() {

    return (<div className={styles.page}>
        <BackgroundVideo src={videos.services} className={styles.page__background} />
        <div className={styles.page__content}>
            <Eccomerce />
            <ELearning />
            <HrSoftware />
            <CustomErp />
            <WebPortals />
        </div>
        <Note />
        <FooterSection />
    </div>)
}