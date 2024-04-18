import { FooterSection } from '@/layers/main'
import { ContactUsModalWrapper } from '@/features/contact-us'
import { BackgroundWrapper, CustomErp, Eccomerce, ELearning, HrSoftware, Note, WebPortals } from '@/features/services'
import { HeaderTheme } from '@/features/header'
import styles from './styles.module.scss'

export default function ServicePage() {
    return (<ContactUsModalWrapper>
        <HeaderTheme theme={'solid'} />
        <div className={styles.page}>
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
        </div>
    </ContactUsModalWrapper>)
}