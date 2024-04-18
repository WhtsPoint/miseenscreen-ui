import type { SearchResult } from '@/widgets/search'
import { getAllBlogs } from '@/features/blog'

export default async function getSearchResult(locale: string, line: string): Promise<SearchResult> {
    const blogs = (await getAllBlogs(locale))
        .filter(({ title, description }) => title.includes(line) || description.includes(line))
        .map(({ title, description, id }) => ({ title, description, id }))

    return  { blogs, services: [] }
}