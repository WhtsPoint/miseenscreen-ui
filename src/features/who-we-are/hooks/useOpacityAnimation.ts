import { useEffect } from 'react'
import { useAnimate, useInView } from 'framer-motion'

export default function useOpacityAnimation() {
    const [ref, animate] = useAnimate()
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        animate([
            [ref.current, { opacity: [0, 1] }, { duration: 0.5 }]
        ])
    }, [ref, isInView, animate])

    return ref
}