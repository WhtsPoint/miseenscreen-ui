import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface Blog {
    id: string,
    title: string,
    description: string
    themes: string[],
    previewCover: StaticImageData,
    createdAt: Date,
    content: ReactNode,
    author: string
}

export type { Blog }