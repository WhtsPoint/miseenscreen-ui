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

const sections = ['welcome'] as ['welcome']

export default function MainPage() {
    const ref = useHeaderTransition()
    const { refs: { welcome }, moveByLink } = useSpecialSection<HTMLDivElement, 'welcome'>(sections)

    useEffect(moveByLink, [moveByLink])
    useOnUrlHashChange(() => {
        console.log(1)
        moveByLink()
    })

    return (<>
        <WelcomeSection ref={ref} />
        <StackPage ref={welcome} />
        <CooperationSection />
        <PhilosophySection />
        <StepsSection />
        <CasesSection />
        <CasesPointsSection />
        <AboutUsSection />
        <FooterSection />
    </>)
}