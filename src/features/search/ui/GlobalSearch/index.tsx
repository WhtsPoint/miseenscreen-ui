import { ResultList, SearchResultList } from '@/widgets/search'
import { useCallback, useEffect, useState } from 'react'
import InputWithLoupe from '@/utils/ui/InputWithLoupe'
import useSelectClosing from '@/utils/hooks/useSelectClosing'
import { useLocale } from 'use-intl'
import useSearch from '../../hooks/useSearch'
import styles from './styles.module.scss'

export default function GlobalSearch() {
    const locale = useLocale()
    const [search, result, line] = useSearch(locale)
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const ref = useSelectClosing<HTMLDivElement>({ onClose: () => setIsHidden(true)})
    const hideByLine = useCallback(() => setIsHidden(line === ''), [line])

    useEffect(hideByLine, [hideByLine])

    return (<div ref={ref} onClick={hideByLine} className={styles.globalSearch}>
        <InputWithLoupe onChange={({ target }) => search(target.value)} />
        {!isHidden && <SearchResultList
            className={styles.searchList}
            blogsList={<ResultList className={styles.resultList} results={result?.blogs || []} />}
            servicesList={<div>KNEE SOCKS</div>}
        />}
    </div>)
}