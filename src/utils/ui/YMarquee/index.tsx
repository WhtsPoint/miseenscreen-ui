import { MotionMarquee } from '@/utils/ui/Marquee'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import { useTime, useTransform } from 'framer-motion'

interface Params extends Children<ReactNode> {
    className?: string
    cycleTime: number
}

export default function YMarquee({ children, className, cycleTime }: Params) {
    const time = useTime()
    const y = useTransform(time, (value) => value % cycleTime / (cycleTime / 100))
    const transform = useTransform(y, (value) => {
        console.log(value)
        return `translateY(-${value}%)`
    })

    return (<MotionMarquee className={className} style={{ transform }} >{children}</MotionMarquee>)
}