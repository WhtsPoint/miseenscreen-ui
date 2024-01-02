import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { Point } from '@/widgets/cooperation'

interface Params {
    className?: string,
    isInView?: boolean
}

const topics = ['responsibility', 'technologies', 'guarantee', 'support', 'launch']

export default function Points({ className, isInView }: Params) {
    const t = useTranslations('cooperation')

    return (<dl className={cl(styles.points, className)}>
        {topics.map((topic, index) => <Point
            key={topic}
            topic={t(topic)}
            description={t(topic + '-description')}
            isInView={isInView}
            animationOptions={{ delay: isInView ? index / 8 : 0 }}
        />)}
    </dl>)
}