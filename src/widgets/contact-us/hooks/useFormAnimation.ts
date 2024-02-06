import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export default function useFormAdaptation() {
    const [ref, animate] = useAnimate()

    useEffect(() => {
        animate('input, textarea, div, button', { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.1) })
    }, [animate])

    return ref
}