'use client'

import { useEffect, useRef } from 'react'

export default function useWidthRef() {
    const widthRef = useRef<number|null>(null)

    useEffect(() => {
        const onResize = () => widthRef.current = window.innerWidth

        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return widthRef
}