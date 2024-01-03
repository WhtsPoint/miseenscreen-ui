import { Point } from '../../../../widgets/philosophy'
import { useTranslations } from 'next-intl'
import { MotionValue, useTransform } from 'framer-motion'

type Topic = 'allInOnce' | 'companyInSmartphone' | 'passionate'

interface Params {
    className?: string,
    scrollProgress: MotionValue<number>
}

export default function ScrollPoint({ className, scrollProgress }: Params) {
    const t = useTranslations('philosophy')
    const topic = useTransform<number, Topic>(scrollProgress, value => {
        if (value <= 1 / 3) return 'allInOnce'
        if (value <= 2 / 3) return 'companyInSmartphone'
        return 'passionate'
    })

    const article = useTransform(topic, value => t(value + '-article'))
    const description = useTransform(topic, value => t(value + '-description'))

    return (<Point
        className={className}
        article={article}
        description={description}
    />)
}
