'use client'

import { useScroll, useTransform, useVelocity } from 'framer-motion'
import PhotoMarquee from '../MediaMarquee'
import type { StaticImageData } from 'next/image'
import chunk from '@/utils/lib/chunk'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import type { Media } from '@/widgets/cases-points/types/Media'

interface Params {
    downMedia: Media[],
    upMedia: Media[],
    position: number,
    photoOnPosition: number,
    scrollSpeedMultiplier?: number,
    defaultSpeed?: number,
    className?: string,
    leftClassName?: string,
    rightClassName?: string,
    leftLineClassName?: string,
    rightLineClassName?: string
}

export default function Background(params: Params) {
    const {
        downMedia,
        upMedia,
        position,
        photoOnPosition,
        scrollSpeedMultiplier = 30,
        defaultSpeed = 0.05,
        className,
        leftClassName,
        rightClassName,
        leftLineClassName,
        rightLineClassName
    } = params
    const { scrollY } = useScroll()
    const velocity = useVelocity(scrollY)
    const speed = useTransform(velocity, (value): number => defaultSpeed * (Math.abs(value) > 0 ? scrollSpeedMultiplier : 1))

    const downChunks = chunk(downMedia, photoOnPosition)
    const upChunks = chunk(upMedia, photoOnPosition)

    const marqueeParams = { position, speed }

    return (<div className={cl(styles.background, className)}>
        <PhotoMarquee {...marqueeParams} lineClassName={leftLineClassName} mainClassName={leftClassName} allMedia={downChunks} direction={'down'} />
        <PhotoMarquee {...marqueeParams} lineClassName={rightLineClassName} mainClassName={rightClassName} allMedia={upChunks} direction={'up'} />
    </div>)
}