import { RefObject, useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useHeaderSettings } from '@/widgets/header'

export default function useHeaderTransition(): RefObject<HTMLDivElement> {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 0']})
    const { setTheme } = useHeaderSettings()

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        setTheme(value >= 0.7 ? 'solid' : 'transparent')
    })

    return ref
}