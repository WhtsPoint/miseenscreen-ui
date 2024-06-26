'use client'

import { type Theme, useHeaderSettings } from '@/widgets/header'
import { useEffect } from 'react'

interface Params {
    theme: Theme
}

export default function HeaderTheme({ theme }: Params) {
    const { setTheme } = useHeaderSettings()

    useEffect(() => {
        setTheme(theme)
    }, [setTheme, theme])

    return null
}