import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export default function useBackgroundAnimation() {
    const [ref, animate] = useAnimate()
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        animate([
            ['*[data-tag="background"]', { opacity: [0, 1] }, { duration: 0.5 }],
            ['*[data-tag="light"]', { opacity: [0, 1] }, { duration: 0.5, at: '+0' }]
        ])
    }, [ref, isInView, animate])

    return ref
}