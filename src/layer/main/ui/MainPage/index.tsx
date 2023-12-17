'use client'

import WelcomeSection from '../WelcomeSection'
import StackPage from '../StackPage'
import useHeaderTransition from '../../hooks/useHeaderTransition'

export default function MainPage() {
    const [firstRef, secondRef] = useHeaderTransition()

    return (<>
        <WelcomeSection ref={firstRef} />
        <StackPage ref={secondRef} />
    </>)
}