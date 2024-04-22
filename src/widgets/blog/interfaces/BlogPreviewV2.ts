import type { Blog, BlogPreview } from '@/widgets/blog'

interface BlogPreviewV2 extends BlogPreview, Pick<Blog, 'author' | 'themes'> {}

export type { BlogPreviewV2 }