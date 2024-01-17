import { EmailSubscription as Form } from '@/widgets/footer'
import subscribeEmail from '@/features/footer/api/subscribeEmail'
import styles from './styles.module.scss'
import { useState } from 'react'
import BasicLoading from '@/utils/ui/LoadingBlock'
import { Status } from '@/widgets/footer/types/Status'

interface Params {
    className?: string
}

export default function EmailSubscription({ className }: Params) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<Status>('waiting')

    const onSend = async (email: string) => {
        setIsLoading(true)
        const { status } = await subscribeEmail(email)
        setIsLoading(false)
        setStatus(status === 200 ? 'success' : 'failure')
    }

    const onChange = () => setStatus('waiting')

    return (<div className={styles.emailSubscription}>
        <Form className={className} status={status} onSend={onSend} onChange={onChange} />
        {isLoading && <BasicLoading className={styles.emailSubscription__loading} />}
    </div>)
}