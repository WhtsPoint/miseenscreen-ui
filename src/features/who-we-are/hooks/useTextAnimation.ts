import { stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export default function useTextAnimation() {
    const [ref, animate] = useAnimate()
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        animate('p', { opacity: [0, 1] }, { delay: stagger(0.2) })
    }, [ref, isInView, animate])

    return ref
}