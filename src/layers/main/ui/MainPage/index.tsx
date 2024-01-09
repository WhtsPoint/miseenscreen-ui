'use client'

import WelcomeSection from '../WelcomeSection'
import StackPage from '../StackPage'
import useHeaderTransition from '../../hooks/useHeaderTransition'
import CooperationSection from '../CooperationSection'
import PhilosophySection from '../PhilosophySection'
import StepsSection from '../StepsSection'
import CasesSection from '@/layers/main/ui/CasesSection'
import CasesPointsSection from '@/layers/main/ui/CasesPointsSection'

export default function MainPage() {
    const [firstRef, secondRef] = useHeaderTransition()

    return (<>
        <WelcomeSection ref={firstRef} />
        <StackPage ref={secondRef} />
        <CooperationSection />
        <PhilosophySection />
        <StepsSection />
        <CasesSection />
        <CasesPointsSection />
    </>)
}