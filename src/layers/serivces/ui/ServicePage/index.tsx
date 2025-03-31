import { FooterSection } from '@/layers/main'
import { ContactUsModalWrapper } from '@/features/contact-us'
import {
    BackgroundWrapper,
    CRM,
    CustomErp,
    Eccomerce,
    ELearning,
    HrSoftware,
    Note,
    WebPortals
} from '@/features/services'
import { HeaderTheme } from '@/features/header'
import { ContactUsPage } from '@/layers/contact'
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
                <CRM />
            </BackgroundWrapper>
            <Note />
            <FooterSection>
                <ContactUsPage />
            </FooterSection>
        </div>
    </ContactUsModalWrapper>)
}