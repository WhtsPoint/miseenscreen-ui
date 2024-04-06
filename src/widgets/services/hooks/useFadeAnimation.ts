'use client'

import { MutableRefObject, useEffect } from 'react'
import { useMotionValue, useScroll, useTransform } from 'framer-motion'

export default function useFadeAnimation(ref: MutableRefObject<null>) {
    const { scrollYProgress: init } = useScroll({ target: ref, offset: ['0 1', '0 0'] })
    const { scrollYProgress: out } = useScroll({ target: ref, offset: ['1 1', '1 0'] })
    const inOpacity = useTransform(init, [0.25, 1], [0, 1])
    const outOpacity = useTransform(out, [0, 0.8], [1, 0])
    const opacity = useMotionValue(0)

    useEffect(() => {
        const updateOpacity = () => {
            opacity.set(init.get() === 1 ? outOpacity.get() : inOpacity.get())
        }

        updateOpacity()

        const unsubInit = init.on('change', updateOpacity)
        const unsubInOpacity = inOpacity.on('change', updateOpacity)
        const unsubOutOpacity = outOpacity.on('change', updateOpacity)

        return () => {
            unsubInit()
            unsubInOpacity()
            unsubOutOpacity()
        }
    }, [inOpacity, init, opacity, outOpacity])

    return [ opacity ] as const
}