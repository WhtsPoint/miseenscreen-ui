import type { ReactNode } from 'react'

interface Description {
    title: string,
    name: string,
    role: string,
    skills: string,
    about: string,
    story: ReactNode
}

export type { Description }