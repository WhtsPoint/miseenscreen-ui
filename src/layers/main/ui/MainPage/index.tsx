'use client'

import WelcomeSection from '../WelcomeSection'
import StackPage from '../StackPage'
import useHeaderTransition from '../../hooks/useHeaderTransition'
import CooperationSection from '@/layers/main/ui/CooperationSection'

export default function MainPage() {
    const [firstRef, secondRef] = useHeaderTransition()

    return (<>
        <WelcomeSection ref={firstRef} />
        <StackPage ref={secondRef} />
        <CooperationSection />
    </>)
}