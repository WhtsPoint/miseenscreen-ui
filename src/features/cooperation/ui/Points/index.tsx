import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    className ?: string
}

export default function Points({ className }: Params) {
    const t = useTranslations('cooperation')

    return (<dl className={cl(styles.points, className)}>
        <dt>{t('responsibility')}</dt>
        <dd>{t('responsibility-description')}</dd>
        <dt>{t('technologies')}</dt>
        <dd>{t('technologies-description')}</dd>
        <dt>{t('guarantee')}</dt>
        <dd>{t('guarantee-description')}</dd>
        <dt>{t('support')}</dt>
        <dd>{t('support-description')}</dd>
        <dt>{t('launch')}</dt>
        <dd>{t('launch-description')}</dd>
    </dl>)
}