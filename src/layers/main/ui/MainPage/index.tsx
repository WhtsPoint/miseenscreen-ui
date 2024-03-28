import StackPage from '../StackPage'
import CooperationSection from '../CooperationSection'
import PhilosophySection from '../AdaptedPhilosophySection'
import StepsSection from '../StepsSection'
import CasesSection from '../CasesSection'
import CasesPointsSection from '../CasesPointsSection'
import AboutUsSection from '../AboutUsSection'
import FooterSection from '../FooterSection'
import BlogSection from '../BlogSection'
import WelcomeSectionWrapper from '../WelcomeSectionWrapper'
import { HeaderThemeSwitcher } from '@/features/header'

export default async function MainPage() {
   return (<WelcomeSectionWrapper>
        <HeaderThemeSwitcher />
        <StackPage />
        <CooperationSection />
        <StepsSection />
        <CasesSection />
        <CasesPointsSection />
        <AboutUsSection />
        <PhilosophySection />
        <BlogSection />
        <FooterSection />
   </WelcomeSectionWrapper>)
}