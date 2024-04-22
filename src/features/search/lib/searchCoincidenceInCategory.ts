import searchCoincidenceInText from '@/features/search/lib/searchCoincidenceInText'
import type { SearchCoincidence } from '@/widgets/search'

interface Result {
    title: SearchCoincidence,
    description: SearchCoincidence
}

export default function searchCoincidenceInCategory<T extends { title: string, description: string }>(
    category: T[], line: string
): (Omit<T, 'title' | 'description'> & Result)[] {
    const result: (Omit<T, 'title' | 'description'> & Result)[] = []

    category.forEach(({ title, description, ...other }) => {
        const searchedTitle = searchCoincidenceInText(title, line)
        const searchedContent = searchCoincidenceInText(description, line)

        if (!searchedTitle.coincidence && !searchedContent.coincidence) return

        result.push({
            title: searchedTitle,
            description: searchedContent,
            ...other
        })
    })

    return result
}