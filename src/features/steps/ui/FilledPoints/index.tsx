import { useTranslations } from 'next-intl'
import { Points } from '@/widgets/steps'

const topics = ['qa', 'deployment', 'support', 'monitoring']

interface Params {
    isInView?: boolean,
    className?: string
}

export default function FilledPoints({ isInView, className }: Params) {
    const t = useTranslations('steps')
    const points = topics.map((topic) => ({
        topic: t(topic),
        description: t(topic + '-description')
    }))

    return (<Points isInView={isInView} className={className} points={points} />)
}