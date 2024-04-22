import { ResultList, SearchResultList } from '@/widgets/search'
import { memo, useCallback, useEffect, useState } from 'react'
import InputWithLoupe from '@/utils/ui/InputWithLoupe'
import useSelectClosing from '@/utils/hooks/useSelectClosing'
import useSearch from '../../hooks/useSearch'
import { useRouter } from '@/utils/lib/navigation'
import { useLocale } from 'use-intl'
import config from '@/utils/config'
import styles from './styles.module.scss'

export default function GlobalSearch() {
    const locale = useLocale()
    const [search, result, line] = useSearch(locale)
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const ref = useSelectClosing<HTMLDivElement>({ onClose: () => setIsHidden(true)})
    const hideByLine = useCallback(() => setIsHidden(line === ''), [line])
    const { push } = useRouter()

    useEffect(hideByLine, [hideByLine])
    
    return (<div ref={ref} onClick={hideByLine} className={styles.globalSearch}>
        <InputWithLoupe onChange={({ target }) => search(target.value)} />
        {!isHidden && <SearchResultList
            className={styles.searchList}
            blogsList={<ResultList
                className={styles.resultList}
                results={result?.blogs || []}
                onClick={(id) => push(`${config.routes.blog}/${id}`)}
            />}
            servicesList={<ResultList
                className={styles.resultList}
                results={result?.services || []}
                onClick={(id) => push(`${config.routes.services.index}#${id}`)}
            />}
        />}
    </div>)
}

export const MemoGlobalSearch = memo(GlobalSearch)