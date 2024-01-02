import { MotionValue, useMotionValue, useTransform, animate, ValueAnimationTransition } from 'framer-motion'
import { useEffect } from 'react'

interface Params {
    text: string,
    animationOptions ?: ValueAnimationTransition<number>,
}

type Return = [MotionValue<string>, () => unknown]

export default function useTextTyping({ text, animationOptions }: Params): Return {
    const current = useMotionValue(0)
    const trigger = () => animate(current, text.length, animationOptions)
    const currentText = useTransform(current, (progress) => {
        return text.slice(0, progress)
    })

    return [currentText, trigger]
}