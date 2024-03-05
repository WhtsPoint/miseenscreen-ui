'use client'

import useHeaderTransition from '@/layers/main/hooks/useHeaderTransition'
import WelcomeSection from '@/layers/main/ui/WelcomeSection'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'

interface Params extends Children<ReactNode> {}

export default function WelcomeSectionWrapper({ children }: Params ) {
    const ref = useHeaderTransition()

    return (<>
        <WelcomeSection ref={ref} />
        {children}
    </>)
}