'use client'

import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useEffect, useState } from 'react'
import styles from './style.module.scss'
import { useAnimate } from 'framer-motion'
import useWheelEvent from '@/utils/hooks/useWheelEvent'

interface Params extends Children<ReactNode[]> {
    previousPage?: string,
    nextPage?: string
}

export default function Scene({ children, previousPage, nextPage }: Params) {
    const [currentScene, setCurrentScene] = useState<number>(0)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const [ref, animate] = useAnimate()

    useWheelEvent({
        onWheel: async ({ deltaY }) => {
            if (isAnimating) return
            const filter = (value: number) => Math.min(Math.max(0, value), children.length)
            const scene = filter(currentScene + deltaY / Math.abs(deltaY))


            setCurrentScene(scene)
            setIsAnimating(true)
            await animate(ref.current, {
                transform: `translateY(-${scene * 100}%)`,
                duration: 100
            })
            setTimeout(() => setIsAnimating(false), 100)
        }
    })

    return (<div className={styles.scenes}>
        <div ref={ref} className={styles.scenes__list}>{children}</div>
    </div>)
}