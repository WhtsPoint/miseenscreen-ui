import { useTranslations } from 'next-intl'
import { Points } from '@/widgets/steps'
import { MotionValue } from 'framer-motion'
import { Topic } from '@/widgets/steps/interfaces/Topic'

const topics = [
    ['planning', 'qa'],
    ['task', 'deployment'],
    ['design', 'support'],
    ['development', 'monitoring']
]

interface Params {
    isInView?: boolean,
    className?: string,
    position: MotionValue<number>
}

export default function FilledPoints({ isInView, className, position }: Params) {
    const t = useTranslations('steps')
    const translateTopic = (topic: string) => ({
        topic: t(topic),
        description: t(topic + '-description')
    })
    const points = topics.map(([first, second]): [Topic, Topic] => {
        return [translateTopic(first), translateTopic(second)]
    })

    return (<Points position={position} isInView={isInView} className={className} points={points} />)
}