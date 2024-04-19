import type { Blog } from './Blog'
import type { Service } from './Service'

interface SearchResult {
    blogs: Blog[],
    services: Service[]
}

export type { SearchResult }