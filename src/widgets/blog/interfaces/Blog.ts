import type { StaticImageData } from 'next/image'

interface Blog {
    id: string,
    title: string,
    description: string,
    themes: string[],
    previewCover: StaticImageData,
    createdAt: Date,
    content: string,
    author: string,
}

export type { Blog }