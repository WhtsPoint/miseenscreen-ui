import ResultBlock from '../ResultBlock'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { useTranslations } from 'next-intl'

type ResultBlockParams = Parameters<typeof ResultBlock>[0]

interface Params {
    results: (Pick<ResultBlockParams, 'title' | 'description'> & { id: string })[],
    onClick?: (id: string) => unknown,
    className?: string
}

export default function ResultList({ results, onClick, className }: Params) {
    const t = useTranslations('search')

    return (<ul className={cl(styles.resultList, className)}>
        {results.length > 0 ? results.map(({ id, ...params}) => <li key={id}><ResultBlock
            onClick={() => onClick?.(id)}
            {...params}
        /></li>) : <b className={styles.empty}>{t('empty')}</b>}
    </ul>)
}