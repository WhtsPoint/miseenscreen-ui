'use client'

import { useTranslations } from 'next-intl'
import useTextTyping from '@/utils/hooks/useTextTyping'
import { useEffect } from 'react'
import { motion, useTransform } from 'framer-motion'

interface Params {
    className?: string
}

export default function Title({ className }: Params) {
    const t = useTranslations('contact-us')
    const [title, trigger] = useTextTyping({
        text: t('title').slice(1),
        animationOptions: { duration: 1 }
    })
    const text = useTransform(title, (value) => t('title')[0] + value)

    useEffect(() => { trigger() }, [trigger])

    return (<motion.h1 className={className}>{text}</motion.h1>)
}