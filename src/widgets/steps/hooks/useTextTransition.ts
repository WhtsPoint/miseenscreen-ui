import { AnimationScope, MotionValue, useAnimate, useMotionValueEvent } from 'framer-motion'
import { Topic } from '../interfaces/Topic'
import { useState } from 'react'

interface Params {
    position: MotionValue<number>,
    text: [Topic, Topic]
}

type Return = [AnimationScope, Topic]

const animOptions = { ease: 'linear', duration: 0.25 } as const

export default function useTextTransition({ position, text }: Params): Return {
    const [ref, animate] = useAnimate()
    const [topic, setTopic] = useState<Topic>(text[position.get()])

    useMotionValueEvent(position, 'change', async () => {
        await animate(ref.current, { y: [0, -100], opacity: [1, 0] }, animOptions)
        setTopic(text[position.get()])
        await animate(ref.current, { y: [100, 0], opacity: [0, 1] }, animOptions)
    })

    return [ref, topic]
}