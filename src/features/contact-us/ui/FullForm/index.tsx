'use client'

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
import postForm from '../../api/postForm'
import ContactInformation from '../ContactInformation'

interface Params {
    formClassName?: string
}

export default function FullForm({ formClassName }: Params) {
    const t = useTranslations('contact-us.result')
    const [step, setStep] = useState<number>(0)
    const captchaToken = useRef<string>('')
    const [isLoading ,setIsLoading] = useState<boolean>(false)
    const [isSendError, setIsSendError] = useState<boolean>(true)
    const { open } = useReCaptchaModal()
    const router = useRouter()

    const onSend = async (data: FormParams) => {
        open(async (token) => {
            captchaToken.current = ''
            setIsLoading(true)
            const [, error] = await postForm({ ...data, token })
            setIsSendError(error !== null)
            setStep(1)
            setIsLoading(false)
        })
    }

    return (<div className={styles.fullForm}>
        <SectionSteps className={styles.fullForm__steps} step={step}>{[
            <section key={0} className={styles.fullForm__steps__step}>
                <Form
                    className={cl(styles.fullForm__steps__step__item, formClassName)}
                    onSend={onSend}
                    isLoading={isLoading}
                />
            </section>,
            <section key={1} className={styles.fullForm__steps__step}>
                <ResultWindow
                    iconSrc={isSendError ? xIcon : checkIcon}
                    text={isSendError ? t('error-title') : t('success-title')}
                    onBackToForm={() => setStep(0)}
                    onBackToHome={() => router.push('/')}
                    className={styles.fullForm__steps__step__item}
                />
            </section>
        ]}</SectionSteps>
        <ContactInformation className={styles.fullForm__contacts} />
    </div>)
}
