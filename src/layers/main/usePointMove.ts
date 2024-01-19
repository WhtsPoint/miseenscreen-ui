import { animate, MotionValue } from 'framer-motion'
import { useRef } from 'react'

export default function usePointMove(value: MotionValue<number>) {
    const control = useRef<any>()
    const scene = useRef<number>(0)

    return (step: number) => () => {
        const prev = scene.current

        if ([-1, 3].includes(prev + step)) return

        scene.current += step
        control.current = animate(
            value,
            [prev / 3 + 0.1, scene.current / 3 + 0.1],
            { duration: 1 }
        )
    }
}