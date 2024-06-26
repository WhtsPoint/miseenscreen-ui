import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import useTextTyping from '@/utils/hooks/useTextTyping'

interface Params {
    quoteText: string
}

export default function useNoteAnimation({ quoteText }: Params) {
    const ref = useRef(null)
    const citeRef = useRef(null)
    const isInView = useInView(citeRef, { once: true })
    const [quote, runQuote] = useTextTyping({ text: quoteText, animationOptions: { duration: 3 } })

    useEffect(() => {(async () => {
        if (!isInView) return

        await animate('h2', { opacity: [0, 1] }, { duration: 1, ease: 'linear' })
        await runQuote()
        await animate('cite', { opacity: [0, 1] }, { delay: 1, duration: 1, ease: 'linear' })
    })()}, [isInView, runQuote])

    return [ref, citeRef, quote] as const
}