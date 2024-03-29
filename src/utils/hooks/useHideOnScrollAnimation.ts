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
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', async (value) => {
        target && await animate(
            target,
            value > 100 ? hideAnimation : showAnimation,
            options
        )
    })
}