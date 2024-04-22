import {
    MotionValue,
    useMotionValue,
    useTransform,
    animate,
    type ValueAnimationTransition,
    type AnimationPlaybackControls
} from 'framer-motion'
import { useRef } from 'react'

interface Params {
    text: string,
    animationOptions ?: ValueAnimationTransition<number>,
}

type Return = [MotionValue<string>, () => unknown, () => unknown]

export default function useTextTyping({ text, animationOptions }: Params): Return {
    const controls = useRef<AnimationPlaybackControls>()
    const current = useMotionValue(0)
    const trigger = () => {
        return controls.current = animate(
            current,
            text.length,
            { ease: 'linear', ...animationOptions }
        )
    }
    const stop = () => {
        controls.current?.stop()
        current.set(0)
    }
    const currentText = useTransform(current, (progress) => {
        return text.slice(0, progress)
    })

    return [currentText, trigger, stop]
}