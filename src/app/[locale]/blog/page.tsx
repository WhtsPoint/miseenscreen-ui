import { AllBlogsPage } from '@/layers/blog'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '@/app/hooks/useCertainIntlMessages'

const messageKeys = [
    'footer',
    'email-subscription'
] as const satisfies string[]

export default function Page() {
    const messeges = useCertainMessages(messageKeys)

    return (<NextIntlClientProvider messages={messeges}>
        <AllBlogsPage />
    </NextIntlClientProvider>)
}