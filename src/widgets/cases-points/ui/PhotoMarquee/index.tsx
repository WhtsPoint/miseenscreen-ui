'use client'

import YMarquee from '@/utils/ui/YMarquee'
import type { MotionValue } from 'framer-motion'
import type { Direction } from '@/utils/lib/y-marquee'
import type { StaticImageData } from 'next/image'
import MarqueeLine from '../MarqueeLine'

interface Params {
    allPhotos: StaticImageData[][]
    speed: MotionValue<number>,
    direction: Direction,
    position: number,
}

export default function PhotoMarquee({ allPhotos, position, ...params }: Params) {
    return (<YMarquee {...params}>
        {allPhotos.map((photos, index) => {
            return <MarqueeLine
            key={index}
            isHidden={index !== position}
            photos={photos}
        />})}
    </YMarquee>)
}