'use client'

import YMarquee from '@/utils/ui/YMarquee'
import type { MotionValue } from 'framer-motion'
import type { Direction } from '@/utils/lib/y-marquee'
import MarqueeLine from '../MarqueeLine'
import type { Media } from '@/widgets/cases-points/types/Media'

interface Params {
    allMedia: Media[][]
    speed: MotionValue<number>,
    direction: Direction,
    position: number,
    mainClassName?: string,
    lineClassName?: string
}

export default function MediaMarquee({ allMedia, position, lineClassName, ...params }: Params) {
    return (<YMarquee {...params} className={lineClassName}>
        {allMedia.map((media, index) => {
            return <MarqueeLine
            key={index}
            isHidden={index !== position}
            media={media}
        />})}
    </YMarquee>)
}