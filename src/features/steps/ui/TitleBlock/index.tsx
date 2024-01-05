import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import { useTranslations } from 'next-intl'

const videoLink = 'https://drive.google.com/uc?export=download&id=1GBN4w051Rz0XbMtfSckTQQCrdK7h0Db9'

interface Params {
    className?: string
}

export default function TitleBlock({ className }: Params) {
    const t = useTranslations('steps')

    return (<div className={cl(styles.titleBlock, className)}>
        <div className={styles.titleBlock__videoBlock}>
            <BackgroundVideo
                src={videoLink}
                videoClass={styles.titleBlock__videoBlock__video}
            />
        </div>
        <h2 className={styles.titleBlock__title}>{t('title')}</h2>
    </div>)
}