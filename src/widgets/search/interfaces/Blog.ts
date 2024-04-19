import type { SearchCoincidence } from '@/utils/types/SearchCoincidence'

interface Blog {
    title: SearchCoincidence,
    description: SearchCoincidence,
    id: string
}

export type { Blog }