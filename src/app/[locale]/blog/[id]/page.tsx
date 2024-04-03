import { getAllBlogsId, getBlogById } from '@/features/blog'
import { BlogPage } from '@/layers/blog'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import useCertainMessages from '@/app/hooks/useCertainIntlMessages'

interface Params {
    params: {
        id: string,
        locale: string
    }
}

export async function generateMetadata({ params: { id, locale } }: Params): Promise<Metadata> {
    const { title, description } = await getBlogById(locale, id)

    return { title, description, openGraph: { title, description } }
}

export async function generateStaticParams() {
    return (await getAllBlogsId()).map((id) => ({ id }))
}

const messageKeys = [
    'footer',
    'email-subscription',
    'contact-us-modal'
] as const satisfies string[]

interface Params {
    params: {
        locale: string,
        id: string
    }
}

export default function Page({ params: { locale, id } }: Params) {
    unstable_setRequestLocale(locale)

    const messages = useCertainMessages(messageKeys)

   return (<NextIntlClientProvider messages={messages}>
       <BlogPage blogId={id} />
   </NextIntlClientProvider>)
}