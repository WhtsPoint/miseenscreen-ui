import { type RefObject, useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { type Theme, useHeaderSettings } from '@/widgets/header'

export default function useHeaderTransition(): RefObject<HTMLDivElement> {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 0']})
    const { theme, setTheme } = useHeaderSettings()

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        const newTheme: Theme = value >= 0.7 ? 'solid' : 'transparent'
        if (theme !== newTheme) setTheme(newTheme)
    })

    return ref
}