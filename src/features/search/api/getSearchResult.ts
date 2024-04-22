'use server'

import type { SearchResult } from '@/widgets/search'
import getAllBlogsSearch from '../api/getAllBlogsSearch'
import getAllServicesSearch from '../api/getAllServicesSearch'

export default async function getSearchResult(locale: string, line: string): Promise<SearchResult> {
    const blogs = await getAllBlogsSearch(locale, line)
    const services = await getAllServicesSearch(locale, line)

    return { blogs, services }
}