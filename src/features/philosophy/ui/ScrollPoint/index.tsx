import { Point } from '@/widgets/philosophy'
import { useTranslations } from 'next-intl'
import { MotionValue, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { useDescriptionAnimation } from '@/widgets/philosophy'
import { cl } from '@/utils/lib/cl'
import { Topic } from '../../types/Topic'
import styles from './styles.module.scss'
import descriptionComponents from '@/features/philosophy/utils/descriptionComponents'

interface Params {
    className?: string,
    scrollProgress: MotionValue<number>,
    onLeft?: () => unknown,
    onRight?: () => unknown
}

const getTopicByScrollProgress = (progress: number) => {
    if (progress <= 1 / 3) return 'allInOnce'
    if (progress <= 2 / 3) return 'companyInSmartphone'
    return 'passionate'
}

export default function ScrollPoint(
    { className, scrollProgress, onLeft, onRight }: Params
) {
    const [topic, setTopic] = useState<Topic>('allInOnce')
    const t = useTranslations('philosophy')
    const descriptionStyles = useDescriptionAnimation({ scrollProgress, count: 3 })

    useMotionValueEvent(scrollProgress, 'change', (value) => {
        setTopic(getTopicByScrollProgress(value))
    })

    return (<Point
        className={cl(styles.scrollPoint, className)}
        article={t(topic + '-article')}
        description={descriptionComponents[topic]}
        descriptionStyles={descriptionStyles}
        onLeft={onLeft}
        onRight={onRight}
    />)
}
