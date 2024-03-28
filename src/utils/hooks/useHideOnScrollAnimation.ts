import {
    TargetAndTransition,
    useAnimate,
    useMotionValueEvent,
    useScroll,
    useVelocity,
    ValueAnimationTransition
} from 'framer-motion'

export default function useHideOnScrollAnimation(
    target: any,
    animate: (ReturnType<typeof useAnimate>)[1],
    showAnimation: TargetAndTransition,
    hideAnimation: TargetAndTransition,
    options?: ValueAnimationTransition
) {
    const { scrollYProgress } = useScroll()
    const speed = useVelocity(scrollYProgress)

    useMotionValueEvent(speed, 'change', async (value) => {
        if (value === 0) return

        target && await animate(
            target,
            value > 0 ? hideAnimation : showAnimation,
            options
        )
    })
}