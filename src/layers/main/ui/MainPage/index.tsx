import CooperationSection from '../CooperationSection'
import PhilosophySection from '../AdaptedPhilosophySection'
import StepsSection from '../StepsSection'
import CasesSection from '../CasesSection'
import CasesPointsSection from '../CasesPointsSection'
import AboutUsSection from '../AboutUsSection'
import FooterSection from '../FooterSection'
import BlogSection from '../BlogSection'
import StackSectionV2 from '../StackSectionV2'
import WelcomeSectionWrapper from '../WelcomeSectionWrapper'
import { ContactUsModalWrapper } from '@/features/contact-us'
import { ContactUsPage } from '@/layers/contact'

export default async function MainPage() {
   return (<ContactUsModalWrapper>
       <WelcomeSectionWrapper>
           <StackSectionV2 />
           <CooperationSection />
           <StepsSection />
           <CasesSection />
           <CasesPointsSection />
           <AboutUsSection />
           <PhilosophySection />
           <BlogSection />
           <FooterSection>
               <ContactUsPage />
           </FooterSection>
       </WelcomeSectionWrapper>
   </ContactUsModalWrapper>)
}