'use client'

import { useEffect, useState } from 'react'

export default function useWidth() {
    const [width, setWidth] = useState<number|null>(null)

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth)

        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return width
}