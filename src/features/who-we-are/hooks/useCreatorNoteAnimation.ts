import { stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export default function useCreatorNoteAnimation() {
    const [ref, animate] = useAnimate()
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        animate([
            [ref.current, { opacity: [0, 1] }, { duration: 0.5 }],
            ['h2, p, *[data-tag="note-photo"]', { opacity: [0, 1] }, { delay: stagger(0.2) }],
        ])
    }, [ref, isInView, animate])

    return ref
}