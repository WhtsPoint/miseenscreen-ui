'use client'

import { ReactNode } from 'react'
import WelcomeSection from '../WelcomeSection'
import { Children } from '@/utils/interfaces/Children'
import useHeaderTransition from '../../hooks/useHeaderTransition'

interface Params extends Children<ReactNode> {}

export default function WelcomeSectionWrapper({ children }: Params ) {
    const ref = useHeaderTransition()

    return (<>
        <WelcomeSection ref={ref} />
        {children}
    </>)
}