'use client'

import { MotionMarquee } from '@/utils/ui/Marquee'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import { MotionValue, useMotionValue, useMotionValueEvent, useTime, useTransform } from 'framer-motion'
import { Direction, methods } from '@/utils/lib/y-marquee'

interface Params extends Children<ReactNode> {
    className?: string
    speed: MotionValue<number>,
    direction: Direction,
}

export default function YMarquee(
    { children, className, speed, direction }: Params
) {
    const method = methods[direction]
    const time = useTime()
    const progress = useMotionValue<number>(method.initial)
    const y = useTransform(progress, (value) => value + '%')

    useMotionValueEvent(time, 'change', () => {
        progress.set(method.calcProgress(progress.get(), speed.get()))
    })

    return (<MotionMarquee
        style={{ y }}
        className={className}
    >
        {children}
    </MotionMarquee>)
}