import { useEffect } from 'react'
import { stagger, useAnimate, useInView } from 'framer-motion'

export default function useInitSectionAnimation() {
    const [ref, animate] = useAnimate()
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        animate([
            [ref.current, { opacity: [0, 1] }, { duration: 0.5 }],
            ['h1, p, cite', { opacity: [0, 1] }, { delay: stagger(0.2), at: '+0' }],
            ['*[data-tag="portrait"]', { opacity: [0, 1], x: [100, 0] }, { duration: 1, at: '+0'}],
            ['*[data-tag="sign"]', { opacity: [0, 1], x: [-50, 0] }, { duration: 1, at: '+0' }]
        ])
    }, [ref, isInView, animate])

    return ref
}