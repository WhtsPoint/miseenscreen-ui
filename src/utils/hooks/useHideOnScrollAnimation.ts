import { TargetAndTransition, useAnimate, useMotionValueEvent, useScroll, useVelocity } from 'framer-motion'

export default function useHideOnScrollAnimation(
    target: any,
    animate: (ReturnType<typeof useAnimate>)[1],
    showAnimation: TargetAndTransition,
    hideAnimation: TargetAndTransition
) {
    const { scrollYProgress } = useScroll()
    const speed = useVelocity(scrollYProgress)

    useMotionValueEvent(speed, 'change', async (value) => {
        if (value === 0) return

        await animate(
            target,
            value > 0 ? hideAnimation : showAnimation,
            { duration: 0.1, ease: 'linear' }
        )
    })
}