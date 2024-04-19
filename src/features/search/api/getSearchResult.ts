import type { SearchResult } from '@/widgets/search'
import { getAllBlogs } from '@/features/blog'
import searchCoincidenceInText from '@/utils/lib/searchCoincidenceInText'

export default async function getSearchResult(locale: string, line: string): Promise<SearchResult> {
    const blogs = (await getAllBlogs(locale))
        .filter(({ title, description }) => title.includes(line) || description.includes(line))
        .map(({ title, id }) => ({ title, id }))
        .map(({ title, id }) => ({
            title: searchCoincidenceInText(title, line),
            description: searchCoincidenceInText(description, line),
            id
        }))

    return { blogs, services: [] }
}