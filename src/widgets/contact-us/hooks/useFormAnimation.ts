import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export default function useFormAdaptation() {
    const [ref, animate] = useAnimate()

    useEffect(() => {
        animate([
            [ref.current, { opacity: [0, 1] }, { duration: 0.1 }],
            ['input, textarea, div, button', { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.1), at: '+0' }]
        ])
    }, [animate, ref])

    return ref
}