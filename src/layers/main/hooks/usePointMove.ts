import { animate, MotionValue, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

type Return = [(step: number) => () => unknown, MotionValue<number>]

export default function usePointMove(): Return {
    const control = useRef<any>()
    const scene = useRef<number>(0)
    const moveProgress = useMotionValue<number>(0)

    return [(step: number) => () => {
        const prev = scene.current

        if ([-1, 3].includes(prev + step)) return

        scene.current += step
        control.current = animate(
            moveProgress,
            [prev / 3 + 0.1, scene.current / 3 + 0.1],
            { duration: 0.5 }
        )
    }, moveProgress]
}