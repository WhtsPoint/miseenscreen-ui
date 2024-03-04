import { StaticImageData } from 'next/image'

interface Blog {
    title: string,
    id: string,
    previewCover: StaticImageData
}

export type { Blog }