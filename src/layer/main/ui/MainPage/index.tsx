'use client'

import WelcomeSection from '../WelcomeSection'
import StackPage from '../StackPage'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useHeaderSettings } from '@/widgets/header'

export default function MainPage() {
    const firstSectionRef = useRef<HTMLSelectElement>(null)
    const secondSectionRef = useRef<HTMLSelectElement>(null)
    const isFirstInView = useInView(firstSectionRef, { margin: '-100px' })
    const isSecondInView = useInView(secondSectionRef)
    const { setTheme } = useHeaderSettings()

    useEffect(() => {
        const isSolid = !isFirstInView && isSecondInView
        setTheme(isSolid ? 'solid' : 'transparent')
    }, [isFirstInView, isSecondInView, setTheme])

    return (<>
        <WelcomeSection ref={firstSectionRef} />
        <StackPage ref={secondSectionRef} />
        <StackPage />
    </>)
}