import { EmailSubscription as Form } from '@/widgets/footer'
import subscribeEmail from '@/features/footer/api/subscribeEmail'
import { useState } from 'react'
import BasicLoading from '@/utils/ui/LoadingBlock'
import { Status } from '@/widgets/footer/types/Status'
import { useReCaptchaModal } from '@/features/re-captcha'
import styles from './styles.module.scss'

interface Params {
    className?: string
}

export default function EmailSubscription({ className }: Params) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<Status>('waiting')
    const { open } = useReCaptchaModal()

    const onSend = async (email: string) => {
        open(async (token) => {
            setIsLoading(true)
            const { status } = await subscribeEmail({ email, reCaptchaToken: token })
            setIsLoading(false)
            setStatus(status === 200 ? 'success' : 'failure')
        })
    }

    const onChange = () => setStatus('waiting')


    return (<div className={styles.emailSubscription}>
        <Form className={className} status={status} onSend={onSend} onChange={onChange} />
        {isLoading && <BasicLoading className={styles.emailSubscription__loading} />}
    </div>)
}