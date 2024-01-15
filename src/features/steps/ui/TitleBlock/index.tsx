import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'

interface Params {
    className?: string
}

export default function TitleBlock({ className }: Params) {
    const t = useTranslations('steps')

    return (<div className={cl(styles.titleBlock, className)}>
        <div className={styles.titleBlock__videoBlock}>
            <BackgroundVideo
                src={videos.steps}
                videoClass={styles.titleBlock__videoBlock__video}
            />
        </div>
        <h2 className={styles.titleBlock__title}>{t('title')}</h2>
    </div>)
}