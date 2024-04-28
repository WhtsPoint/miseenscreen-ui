import {
    CreatorNote,
    CodeNote,
    ModelNote,
    TabletNote,
    BookNote,
    CasesNote,
    CompanyNote,
    StackNote,
    InitSection
} from '@/features/who-we-are'
import { FooterSection } from '@/layers/main'
import { HeaderTheme } from '@/features/header'
import { ContactUsPage } from '@/layers/contact'
import styles from './styles.module.scss'

export default function WhoWeArePage() {
    return (<section className={styles.page}>
        <HeaderTheme theme={'solid'} />
        <InitSection />
        <CreatorNote />
        <CodeNote />
        <ModelNote />
        <TabletNote />
        <BookNote />
        <CasesNote />
        <CompanyNote />
        <StackNote />
        <FooterSection>
            <ContactUsPage />
        </FooterSection>
    </section>)
}