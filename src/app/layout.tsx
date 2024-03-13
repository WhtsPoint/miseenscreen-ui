import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
    const metadataBase = process.env.HOST_URL ? new URL(process.env.HOST_URL) : null

    return {
        metadataBase,
        title: {
            template: '%s | MISEENSCREEN',
            default: 'MISEENSCREEN'
        }
    }
}
export default function Layout({ children }: Children<ReactNode>) {
    return children
}