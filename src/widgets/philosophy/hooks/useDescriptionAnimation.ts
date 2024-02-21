import { MotionValue, useTransform } from 'framer-motion'

interface Params {
    scrollProgress: MotionValue<number>,
    count: number,
}

export default function useDescriptionAnimation(params: Params) {
    const { scrollProgress, count  } = params
    const step = 1 / count
    const a = 0.1
    const b = 0.1
    const animationStartAt = step - a

    const xStepProgress = useTransform(scrollProgress, value => {
        return value > animationStartAt && value < 1 - a ? value % step : animationStartAt
    })
    const xProgress = useTransform(xStepProgress, [animationStartAt, step], [0, -250])
    const opacityProgress = useTransform(xStepProgress, [0, b, animationStartAt, step], [0, 1, 1, 0])

    return { x: xProgress, opacity: opacityProgress }
}