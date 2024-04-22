'use client'

import type { ReactNode } from 'react'
import WelcomeSection from '../WelcomeSection'
import type { Children } from '@/utils/interfaces/Children'
import useHeaderTransition from '../../hooks/useHeaderTransition'

interface Params extends Children<ReactNode> {}

export default function WelcomeSectionWrapper({ children }: Params ) {
    const ref = useHeaderTransition()

    return (<>
        <WelcomeSection ref={ref} />
        {children}
    </>)
}