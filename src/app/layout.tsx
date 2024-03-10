import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        template: '%s | MISEENSCREEN',
        default: 'MISEENSCREEN'
    }
}

export default function Layout({ children }: Children<ReactNode>) {
    return children
}