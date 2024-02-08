import { Form, FormParams } from '@/widgets/contact-us'
import { useRef, useState } from 'react'
import SectionSteps from '@/utils/ui/SectionSteps'
import { useReCaptchaModal } from '@/features/re-captcha'
import { useTranslations } from 'next-intl'
import { ResultWindow } from '@/widgets/contact-us'
import { cl } from '@/utils/lib/cl'
import { useRouter } from '@/utils/lib/navigation'
import styles from './styles.module.scss'
import checkIcon from '@/utils/assets/images/check.svg'
import xIcon from '@/utils/assets/images/x.svg'

interface Params {
    formClassName?: string
}

export default function FullForm({ formClassName }: Params) {
    const t = useTranslations('contact-us.result')
    const [step, setStep] = useState<number>(0)
    const captchaToken = useRef<string>('')
    const [isSendError, setIsSendError] = useState<boolean>(true)
    const { open } = useReCaptchaModal()
    const router = useRouter()

    const onSend = (data: FormParams) => {
        open((token) => {
            captchaToken.current = token
            setStep(1)
        })
    }

    return (<div className={styles.fullForm}>
        <SectionSteps className={styles.fullForm__steps} step={step}>{[
            <div key={0} className={styles.fullForm__steps__step}>
                <Form className={cl(styles.fullForm__steps__step__item, formClassName)} onSend={onSend} />
            </div>,
            <div key={1} className={styles.fullForm__steps__step}>
                <ResultWindow
                    iconSrc={isSendError ? xIcon : checkIcon}
                    text={isSendError ? t('error-title') : t('success-title')}
                    onBackToForm={() => setStep(0)}
                    onBackToHome={() => router.push('/')}
                    className={styles.fullForm__steps__step__item}
                />
            </div>
        ]}</SectionSteps>
    </div>)
}
