import { useEffect, useId, useRef } from 'react'
import { useCaptchaLoading } from '../../stores/captcha-loading'
import { ExtendedWindow } from '../../types/ExtendedWindow'

interface Params {
    onComplete?: (token: string) => unknown
}

export default function ReCaptcha({ onComplete }: Params) {
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()
    const callbackName = 'reCaptcha_onComplete_' + id
    const { isLoaded } = useCaptchaLoading()

    useEffect(() => {
        if (!isLoaded) return
        const extendedWindow = window as unknown as ExtendedWindow
        if (!ref.current) return
        //BUG: There is problem with react strict mode, when component renders twice and trigger recaptcha exception.
        try { extendedWindow.grecaptcha.render(ref.current) } catch (error) { console.error(error) }
    }, [isLoaded])

    useEffect(() => {
        const extendedWindow = window as unknown as ExtendedWindow
        extendedWindow[callbackName] = onComplete

        return () => { delete (window as any)[callbackName] }
    }, [id, callbackName, onComplete])

    return (<>
        <div
            id={id}
            data-sitekey={'6LdA-mApAAAAAFv1ICSpiiWoac7PZzzKKWquboox'}
            data-callback={callbackName}
            ref={ref}
        />
    </>)
}