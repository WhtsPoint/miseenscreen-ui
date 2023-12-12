import useWheelEvent from '@/utils/hooks/useWheelEvent'
import { useState } from 'react'
import { useAnimate } from 'framer-motion'
import { useRouter } from '@/utils/lib/navigation'
import * as net from 'net'

interface Params {
    previousPage?: string,
    nextPage?: string,
    childrenCount: number
}

export default function useScene({ childrenCount, previousPage, nextPage }: Params) {
    const [currentScene, setCurrentScene] = useState<number>(0)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const [ref, animate] = useAnimate()
    const { push } = useRouter()
    const lastScene = nextPage ? childrenCount : childrenCount - 1
    const startScene = previousPage ? -1 : 0

    useWheelEvent({
        onWheel: async ({ deltaY }) => {
            alert(1)
            if (isAnimating) return
            const filter = (value: number) => Math.min(
                Math.max(startScene, value),
                lastScene
            )
            const scene = filter(currentScene + deltaY / Math.abs(deltaY))
            console.log(scene)
            setCurrentScene(scene)
            setIsAnimating(true)

            await animate(
                ref.current,
                { transform: `translateY(${scene * -100}%)` },
                { duration: 0.5 }
            )

            if (previousPage && scene === startScene) return push(previousPage)
            if (nextPage && scene === lastScene) return push(nextPage)

            setTimeout(() => setIsAnimating(false), 100)
        }
    })

    return { ref }
}