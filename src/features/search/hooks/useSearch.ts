import useDebounce from '@/utils/hooks/useDebounce'
import { useState } from 'react'
import type { SearchResult } from '@/widgets/search'
import getSearchResult from '../api/getSearchResult'

export default function useSearch(locale: string) {
    const [line, setLine] = useState<string>('')
    const [result, setResult] = useState<SearchResult|null>(null)
    const getResultAndSet = useDebounce(async (value: string) => {
        setResult(await getSearchResult(locale, value))
    }, 500)

    const search = async (value: string) => {
        setLine(value)
        value !== '' && getResultAndSet(value)
    }

    return [search, result, line] as const
}