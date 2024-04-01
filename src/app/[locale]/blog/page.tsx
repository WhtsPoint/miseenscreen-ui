import { AllBlogsPage } from '@/layers/blog'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../../hooks/useCertainIntlMessages'
import { unstable_setRequestLocale } from 'next-intl/server'

const messageKeys = [
    'footer',
    'email-subscription'
] as const satisfies string[]

interface Params {
    params: {
        locale: string
    }
}

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);

    const messeges = useCertainMessages(messageKeys)

    return (<NextIntlClientProvider messages={messeges}>
        <AllBlogsPage />
    </NextIntlClientProvider>)
}