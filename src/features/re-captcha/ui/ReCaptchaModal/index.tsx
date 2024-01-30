'use client'

import { useReCaptchaModal } from '../../stores/captcha-modal'
import ReCaptcha from '../ReCaptcha'
import styles from './styles.module.scss'

export default function ReCaptchaModal() {
    const { close, isOpened, onComplete} = useReCaptchaModal()

    return (isOpened && <div className={styles.modal}>
        <ReCaptcha onComplete={(token) => {
            onComplete?.(token)
            close()
        }} />
    </div>)
}