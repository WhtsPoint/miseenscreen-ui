import type { Blog } from '@/widgets/blog/interfaces/Blog'

interface BlogPreview extends Pick<Blog, 'title' | 'id' | 'previewCover' | 'createdAt'> {}

export type { BlogPreview }