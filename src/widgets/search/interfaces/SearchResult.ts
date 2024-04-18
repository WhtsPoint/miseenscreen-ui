import { Blog } from './Blog'
import { Service } from './Service'

interface SearchResult {
    blogs: Blog[],
    services: Service[]
}

export type { SearchResult }