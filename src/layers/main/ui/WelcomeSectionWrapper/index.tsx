'use client'

import WelcomeSection from '@/layers/main/ui/WelcomeSection'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'

interface Params extends Children<ReactNode> {}

export default function WelcomeSectionWrapper({ children }: Params ) {
    return (<>
        <WelcomeSection />
        {children}
    </>)
}