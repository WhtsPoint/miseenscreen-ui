import { FooterSection } from '@/layers/main'
import { BackgroundWrapper, CustomErp, Eccomerce, ELearning, HrSoftware, Note, WebPortals } from '@/features/services'
import styles from './styles.module.scss'

export default function ServicePage() {
    return (<div className={styles.page}>
        <BackgroundWrapper
            servicesClassName={styles.page__content}
            videoClassName={styles.page__background}
        >
            <Eccomerce />
            <ELearning />
            <HrSoftware />
            <CustomErp />
            <WebPortals />
        </BackgroundWrapper>
        <Note />
        <FooterSection />
    </div>)
}