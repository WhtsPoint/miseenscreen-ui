import { Form, FormParams } from '@/widgets/contact-us'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import SectionSteps from '@/utils/ui/SectionSteps'
import { useReCaptchaModal } from '@/features/re-captcha'
import { cl } from '@/utils/lib/cl'

interface Params {
    formClassName?: string
}

export default function FullForm({ formClassName }: Params) {
    const [step, setStep] = useState<number>(0)
    const captchaToken = useRef<string>('')
    const { open } = useReCaptchaModal()

    const onSend = (data: FormParams) => {
        setStep(1)
        // open((token) => {
        //     captchaToken.current = token
        //     setStep(1)
        // })
    }

    return (<div className={styles.fullForm}>
        <SectionSteps className={styles.fullForm__steps} step={step}>{[
            <div key={0} className={cl(styles.fullForm__steps__step, styles.fullForm__steps__form)}>
                <Form className={cl(styles.fullForm__steps__form__content, formClassName)} onSend={onSend} />
            </div>,
            <h1 key={1} className={styles.fullForm__steps__step} color={'white'}>ABCD</h1>
        ]}</SectionSteps>
    </div>)
}
