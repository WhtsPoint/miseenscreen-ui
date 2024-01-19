'use client'

import WelcomeSection from '../WelcomeSection'
import StackPage from '../StackPage'
import useHeaderTransition from '../../hooks/useHeaderTransition'
import CooperationSection from '../CooperationSection'
import PhilosophySection from '../AdaptedPhilosophySection'
import StepsSection from '../StepsSection'
import CasesSection from '../CasesSection'
import CasesPointsSection from '../CasesPointsSection'
import AboutUsSection from '../AboutUsSection'
import FooterSection from '@/layers/main/ui/FooterSection'

export default function MainPage() {
    const ref = useHeaderTransition()

    return (<>
        <WelcomeSection ref={ref} />
        <StackPage />
        <CooperationSection />
        <PhilosophySection />
        {/*<StepsSection />*/}
        {/*<CasesSection />*/}
        {/*<CasesPointsSection />*/}
        {/*<AboutUsSection />*/}
        {/*<FooterSection />*/}
    </>)
}