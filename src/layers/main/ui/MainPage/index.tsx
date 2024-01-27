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
import useSpecialSection from '@/utils/hooks/useSpecialSections'
import useOnUrlHashChange from '@/utils/hooks/useOnUrlHashChange'
import { useEffect } from 'react'

const sections = ['cases', 'cooperation'] as ['cases', 'cooperation']

export default function MainPage() {
    const ref = useHeaderTransition()
    const { refs: { cases, cooperation }, moveByLink } = useSpecialSection<
        HTMLDivElement, 'cases' | 'cooperation'
    >(sections)

    useEffect(moveByLink, [moveByLink])
    useOnUrlHashChange(moveByLink)

    return (<>
        <WelcomeSection ref={ref} />
        <StackPage />
        <CooperationSection ref={cooperation} />
        <PhilosophySection />
        <StepsSection />
        <CasesSection />
        <CasesPointsSection ref={cases} />
        <AboutUsSection />
        <FooterSection />
    </>)
}