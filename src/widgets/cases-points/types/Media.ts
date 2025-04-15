import type { StaticImageData } from 'next/image'

type Media = StaticImageData | { type: 'video', src: string, format: string }

export type { Media }