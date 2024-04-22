import type { SearchCoincidence } from '../types/SearchCoincidence'

interface Blog {
    title: SearchCoincidence,
    description: SearchCoincidence,
    id: string
}

export type { Blog }