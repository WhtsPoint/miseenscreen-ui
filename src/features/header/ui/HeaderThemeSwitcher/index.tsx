'use client'

import { useHeaderSettings } from '@/widgets/header'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Theme } from '@/widgets/header'

interface Params {
    whenInView?: Theme,
    whenNotInView?: Theme
}

export default function HeaderThemeSwitcher(params: Params) {
    const { whenInView = 'transparent', whenNotInView = 'solid' } = params
    const ref = useRef(null)
    const isInView = useInView(ref)
    const { setTheme } = useHeaderSettings()

    useEffect(() => {
        setTheme(isInView ? whenInView : whenNotInView)
    }, [isInView, setTheme, whenInView, whenNotInView])

    return (<div ref={ref} ></div>)
}