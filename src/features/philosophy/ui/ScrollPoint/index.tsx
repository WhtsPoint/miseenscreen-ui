import { Point } from '../../../../widgets/philosophy'
import { useTranslations } from 'next-intl'
import { MotionValue, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import { useState } from 'react'
import value from '*.png'

type Topic = 'allInOnce' | 'companyInSmartphone' | 'passionate'

interface Params {
    className?: string,
    scrollProgress: MotionValue<number>
}

const getTopicByScrollProgress = (progress: number) => {
    if (progress <= 1 / 3) return 'allInOnce'
    if (progress <= 2 / 3) return 'companyInSmartphone'
    return 'passionate'
}

export default function ScrollPoint({ className, scrollProgress }: Params) {
    const [topic, setTopic] = useState<Topic>('allInOnce')
    const t = useTranslations('philosophy')

    const xStepProgress = useTransform(scrollProgress, value => value % (1 / 3))
    const xProgress = useTransform(xStepProgress, [0.25, 1 / 3], [0, -250])
    const opacityProgress = useTransform(xStepProgress, [0, 0.1, 0.25, 1 / 3], [0, 1, 1, 0])

    useMotionValueEvent(scrollProgress, 'change', (value) => {
        setTopic(getTopicByScrollProgress(value))
    })

    return (<Point
        className={className}
        article={t(topic + '-article')}
        description={t(topic + '-description')}
        descriptionStyles={{ x: xProgress, opacity: opacityProgress }}
    />)
}
