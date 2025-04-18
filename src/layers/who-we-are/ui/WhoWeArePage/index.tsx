import {
    CreatorNote,
    CodeNote,
    ModelNote,
    TabletNote,
    BookNote,
    CasesNote,
    CompanyNote,
    StackNote,
    InitSection,
    Experience,
    FoxtrotStack,
    MNSStack,
    MSStack
} from '@/features/who-we-are'
import { FooterSection } from '@/layers/main'
import { HeaderTheme } from '@/features/header'
import { ContactUsPage } from '@/layers/contact'
import styles from './styles.module.scss'

export default function WhoWeArePage() {
    return (<>
            <section className={styles.page}>
            <HeaderTheme theme={'solid'} />
            <InitSection />
            <Experience />
            <FoxtrotStack />
            <MNSStack />
            <MSStack />
            <CreatorNote />
            <CodeNote />
            <ModelNote />
            <TabletNote />
            <BookNote />
            <CasesNote />
            <CompanyNote />
            <StackNote />
        </section>
        <FooterSection>
            <ContactUsPage />
        </FooterSection>
    </>)

}