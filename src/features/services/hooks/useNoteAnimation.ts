import { MutableRefObject, useEffect, useRef } from 'react'
import { animate, MotionValue, useInView } from 'framer-motion'
import useTextTyping from '@/utils/hooks/useTextTyping'

type Return = [MutableRefObject<null>, MutableRefObject<null>, MotionValue<string>]

interface Params {
    quoteText: string
}

export default function useNoteAnimation({ quoteText }: Params): Return {
    const ref = useRef(null)
    const citeRef = useRef(null)
    const isInView = useInView(citeRef, { once: true })
    const [quote, runQuote] = useTextTyping({ text: quoteText, animationOptions: { duration: 3 } })

    useEffect(() => {(async () => {
        if (!isInView) return

        await animate('h2', { opacity: [0, 1] }, { duration: 1, ease: 'linear' })
        await runQuote()
        await animate('cite', { opacity: [0, 1] }, { delay: 1, duration: 1, ease: 'linear' })
    })()}, [isInView])

    return [ref, citeRef, quote]
}