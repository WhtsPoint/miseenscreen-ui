'use client'

import type { Children } from '@/utils/interfaces/Children'
import useCertainSection from '@/utils/hooks/useCertainSection'
import { type ReactNode, useRef } from 'react'

export default function CertainSectionWrapper({ children }: Children<ReactNode>) {
    const ref = useRef(null)

    useCertainSection({ ref, section: 'blog' })

    return (<>
        <div ref={ref}>
            {children}
        </div>
    </>)
}