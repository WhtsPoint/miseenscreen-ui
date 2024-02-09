    'use client'

import { useCaptchaLoading } from '../stores/captcha-loading'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useEffect } from 'react'
import Script from 'next/script'
import { ExtendedWindow } from '@/features/re-captcha/types/ExtendedWindow'

export default function ReCaptchaProvider({ children }: Children<ReactNode>) {
    const { onLoad } = useCaptchaLoading()

    const onScriptLoad = () => {
        const extendedWindow = window as unknown as ExtendedWindow
        extendedWindow.grecaptcha.ready(onLoad)
    }

    return (<>
        {children}
        <Script src={'https://www.google.com/recaptcha/api.js'} onLoad={onScriptLoad} />
    </>)
}