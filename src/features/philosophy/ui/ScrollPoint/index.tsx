import { Point } from '../../../../widgets/philosophy'
import { useTranslations } from 'next-intl'
import { MotionValue, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import useDescriptionAnimation from '@/widgets/philosophy/hooks/useDescriptionAnimation'

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
    const descriptionStyles = useDescriptionAnimation({ scrollProgress, count: 3 })

    useMotionValueEvent(scrollProgress, 'change', (value) => {
        setTopic(getTopicByScrollProgress(value))
    })

    return (<Point
        className={className}
        article={t(topic + '-article')}
        description={t(topic + '-description')}
        descriptionStyles={descriptionStyles}
    />)
}
