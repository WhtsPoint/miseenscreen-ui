import { Blog } from '@/widgets/blog'

interface BlogWithNoText extends Pick<Blog, 'id' | 'previewCover' | 'createdAt'>  {}

export type { BlogWithNoText }