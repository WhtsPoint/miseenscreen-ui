import { Blog } from '@/widgets/blog/interfaces/Blog'

interface BlogPreview extends Pick<Blog, 'title' | 'id' | 'previewCover' | 'createdAt' | 'author' | 'themes'> {}

export type { BlogPreview }