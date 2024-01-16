import { EmailSubscription as Form } from '@/widgets/footer'
import subscribeEmail from '@/features/footer/api/subscribeEmail'

interface Params {
    className?: string
}

export default function EmailSubscription({ className }: Params) {
    const onSend = async (email: string) => {
        const { status } = await subscribeEmail(email)
    }

    return (<Form className={className} onSend={onSend} />)
}