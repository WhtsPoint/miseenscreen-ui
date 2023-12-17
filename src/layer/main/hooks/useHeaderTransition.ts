import { RefObject, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useHeaderSettings } from '@/widgets/header'

type Return = [RefObject<HTMLSelectElement>, RefObject<HTMLSelectElement>]

export default function useHeaderTransition(): Return {
    const firstSectionRef = useRef<HTMLSelectElement>(null)
    const secondSectionRef = useRef<HTMLSelectElement>(null)
    const isFirstInView = useInView(firstSectionRef, { margin: '-150px' })
    const isSecondInView = useInView(secondSectionRef)
    const { setTheme } = useHeaderSettings()

    useEffect(() => {
        const isSolid = !isFirstInView && isSecondInView
        setTheme(isSolid ? 'solid' : 'transparent')
    }, [isFirstInView, isSecondInView, setTheme])

    return [firstSectionRef, secondSectionRef]
}