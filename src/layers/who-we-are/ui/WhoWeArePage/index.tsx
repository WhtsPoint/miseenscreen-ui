import {
    CreatorNote,
    InitSection,
    CodeNote,
    ModelNote,
    TabletNote,
    BookNote,
    CasesNote,
    CompanyNote,
    StackNote
} from '@/features/who-we-are'
import { FooterSection } from '@/layers/main'
import styles from './styles.module.scss'

export default function WhoWeArePage() {
    return (<section className={styles.page}>
        <InitSection />
        <CreatorNote />
        <CodeNote />
        <ModelNote />
        <TabletNote />
        <BookNote />
        <CasesNote />
        <CompanyNote />
        <StackNote />
        <FooterSection />
    </section>)
}