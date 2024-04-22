import {
    type TargetAndTransition,
    useAnimate,
    useMotionValueEvent,
    useScroll,
    type ValueAnimationTransition
} from 'framer-motion'

export default function useHideOnScrollAnimation(
    showAnimation: TargetAndTransition,
    hideAnimation: TargetAndTransition,
    options?: ValueAnimationTransition
) {
    const [ref, animate] = useAnimate()
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', async (value) => {
       await animate(
           ref.current,
            value > 100 ? hideAnimation : showAnimation,
            options
        )
    })

    return [ref, animate] as const
}